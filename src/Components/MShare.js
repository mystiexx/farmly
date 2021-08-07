import { TweetBox, TweetBoxForm, TweetBoxInput, TweetBoxInputI, TweetBoxImage } from "./Feed.style";
import React, { useState, useEffect } from "react";
import firebase, { db, storage } from "../fire";
import { Button, useToast, Flex, Spacer, IconButton } from "@chakra-ui/react";
import {BiImageAdd} from 'react-icons/bi'
import Files from "react-files";

function MShare(props) {
    const toast = useToast("");
    const [feed, setFeed] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [ file, setFile ] = useState(null)

    const FileChange = files => {
        if( files[0] ) {
            setImage(files[0])
        }
    }

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

    const handlePost = (e) => {
        e.preventDefault();
        setLoading(true);
        const uploadTask = storage.ref(`store/${image.name}`).put(image)
        uploadTask.on(
            'state_changed',
            snapshot => {},
            error => {
                console.log(error)
            },
            () =>{ 
                storage.ref('store')
                .child(image.name)
                .getDownloadURL()
                .then(url=>{
                    console.log(url)
                    setFile(url)
                })
            }
        )
        const user = firebase.auth().currentUser;
        db.collection("market")
            .add({
                body: feed,
                id: user.uid,
                imageUrl: file,
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

export default MShare;
