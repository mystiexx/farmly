import {
    TweetBox,
    TweetBoxForm,
    TweetBoxInput,
    TweetBoxInputI,
    TweetBoxImage,
} from "../Components/Feed.style";
import React, { useState, useEffect } from "react";
import firebase, { db } from "../fire";
import { Button, useToast, Flex, Spacer } from "@chakra-ui/react";

function Share(props) {
    const toast = useToast("");
    const [feed, setFeed] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setImage(await fileRef.getDownloadURL());
    };

    const clearInputs = () => {
        setFeed(" ");
    };

    const handlePost = (e) => {
        e.preventDefault();
        setLoading(true);
        const user = firebase.auth().currentUser;
        db.collection("posts")
            .add({
                body: feed,
                id: user.uid,
                imageUrl: image,
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
                window.location.href='/'
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
                    <input type="file" onChange={handleUpload} id='file'/>
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
