import {
    TweetBox,
    TweetBoxForm,
    TweetBoxInput,
    TweetBoxInputI,
    TweetBoxImage,
} from "../Components/Feed.style";
import React, { useState, useEffect } from "react";
import firebase, { db } from "../fire";
import { Button, useToast, Flex, Spacer, IconButton, Text } from "@chakra-ui/react";
import {BiImageAdd} from 'react-icons/bi'
import Files from "react-files";

function Share(props) {
    const toast = useToast("");
    const [feed, setFeed] = useState("");
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const FileChange = async (files) => {
       const file = files[0]
       const storageRef = firebase.storage().ref()
       const fileRef = storageRef.child(file.name)
       await fileRef.put(file)
       const fileUrl = await fileRef.getDownloadURL()
       setImage(fileUrl)
    }

    const fetchUser = async () => {
        const user = firebase.auth().currentUser;
        db.collection("users")
            .where("uid", "==", user.uid)
            .get()
            .then((data) => {
                data.forEach((doc) => {
                    setName(doc.data().name)
                    setUserName(doc.data().username)
                });
            });
    };

    const FileError = (error, file) => {
        toast({
            title: "Error Occured.",
            description: error.message,
            status: "error",
            duration: 9000,
            isClosable: true,
        });
    }

    const clearInputs = () => {
        setFeed(" ");
    };

    const handlePost =  (e) => {
        e.preventDefault();
        setLoading(true);
        const user = firebase.auth().currentUser;
        db.collection("posts")
            .add({
                body: feed,
                id: user.uid,
                imageUrl: image,
                name: name,
                username: username,
                likeCount: 0,
                createdAt: new Date().toISOString(),
            })
            .then(() => {
                toast({
                    title: "Post created.",
                    description: "We've created your post for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
            
                setLoading(false);
                clearInputs();
            })
            .catch((error) => {
                toast({
                    title: "Error Occured.",
                    description: error,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
                console.error("error", error);
            });
    };

    useEffect(() => {
        clearInputs();
        fetchUser()
    }, []);
    return (
        <TweetBox>
            <TweetBoxForm>
                <TweetBoxInput>
                    <TweetBoxImage src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg" />
                    <TweetBoxInputI
                        row="4"
                        cols="50"
                        onChange={(e) => setFeed(e.target.value)}
                        placeholder={props.text}
                    />
                </TweetBoxInput>
                <Flex>
                    <Spacer />
                    <Text mr={4} mt={3} style={{
                        fontSize:'10px',
                        fontFamily:'poppins'
                    }}>Please choose an image first</Text>
                    <Files
                    onChange={FileChange}
                        onError={FileError}
                        id="fileselect"
                        accepts={["image/jpg", "image/png", "image/jpeg"]}
                        minFiles={1}
                        maxFiles={5}
                        maxFileSize={1000000}
                        minFileSize={1000}
                        clickable
                    >
                        <IconButton aria-label="Search database" icon={<BiImageAdd/>} />
                        
                    </Files>
                    <Button
					ml={3}
                        style={{
                            fontFamily: "poppins",
                            backgroundColor: "#c5d86d",
                            color: "#261c15",
                        }}
                        isLoading={loading}
                        disabled={loading}
                        onClick={handlePost}
                    >
                        Post
                    </Button>
                </Flex>
            </TweetBoxForm>
        </TweetBox>
    );
}

export default Share;
