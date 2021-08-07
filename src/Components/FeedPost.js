import {
    Post,
    PostAvatar,
    PostAvatarImage,
    PostBody,
    PostHeaderSpecial,
    PostHeaderText,
    PostHeaderDescription,
    PostBodyImage,
    PostFooter,
    PostBadge,
} from "./Feed.style";
import { Box, Center } from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import firebase, { db } from "../fire";
import React, { useState, useEffect } from "react";

function FeedPost() {
    const [feed, setFeed] = useState([]);
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');

    const fetchUser = async () => {
        const user = firebase.auth().currentUser;
        console.log(user)
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


    const getPost = () => {
        db.collection("posts")
            .orderBy("createdAt", "desc")
            .get()
            .then((querySnapshot) => {
                const documents = querySnapshot.docs.map((doc) => doc.data());
                setFeed(documents);
            });
    };

    useEffect(() => {
        getPost();
        fetchUser()
    }, []);
    return (
        <>
            {feed.length <= 0 ? (
                <Box>
                    <Center>
                        <Box
                        mt={2}
                        p={2}
                            style={{
                                backgroundColor: " #f05d23",
                                color: '#fff',
                            }}
                        >
                            {" "}
                            No Feed{" "}
                        </Box>
                    </Center>
                </Box>
            ) : (
                <>
                    {feed.map((data) => (
                        <Post>
                            <PostAvatar>
                                <PostAvatarImage
                                    src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"
                                    alt="feed"
                                    height="40px"
                                />
                            </PostAvatar>

                            <PostBody>
                                <div className="post_header">
                                    <PostHeaderText>
                                       {name}
                                        <PostHeaderSpecial>@{username}</PostHeaderSpecial>
                                    </PostHeaderText>

                                    <PostHeaderDescription>
                                        <p>{data.body} </p>
                                    </PostHeaderDescription>
                                </div>

                                <PostBodyImage src={data.imageUrl} />

                                <PostFooter>
                                    <PostBadge>
                                        <AiOutlineLike
                                            style={{ fontSize: "25px", color: "#775937" }}
                                        />{" "}
                                    </PostBadge>
                                    <PostBadge>
                                        <AiOutlineComment
                                            style={{
                                                fontSize: "25px",
                                                color: "#775937",
                                                marginLeft: "10px",
                                            }}
                                        />{" "}
                                    </PostBadge>
                                </PostFooter>
                            </PostBody>
                        </Post>
                    ))}
                </>
            )}
        </>
    );
}

export default FeedPost;
