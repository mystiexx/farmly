import {
    Post,
    PostAvatar,
    PostAvatarImage,
    PostBody,
    PostHeaderSpecial,
    PostHeaderText,
    PostHeaderDescription,
    PostBodyImage,
} from "./Feed.style";
import { Box, Center } from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";
import { db } from "../fire";
import React, { useState, useEffect } from "react";
import { Spinner, Grid } from "@chakra-ui/react";
import  {VscComment}  from 'react-icons/vsc'

function FeedPost() {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);



    const getPost = () => {
        db.collection("posts")
            .orderBy("createdAt", "desc")
            .get()
            .then((querySnapshot) => {
                const documents = querySnapshot.docs.map((doc) => doc.data());
                if (documents.length <= 0) {
                    setFeed([]);
                    setLoading(false);
                } else if (documents) {
                    console.log(documents)
                    setFeed(documents);
                    setLoading(false);
                }
            });
    };

    useEffect(() => {
        getPost();
    }, []);
    return (
        <>
            {loading ? (
                <Center style={{ marginTop: 100 }}>
                    <Spinner size="xl" style={{ color: "#1B2F5E" }} />
                </Center>
            ) : (
                <>
                    {feed.length <= 0 ? (
                        <Box>
                            <Center>
                                <Box
                                    mt={2}
                                    p={2}
                                    style={{
                                        backgroundColor: " #f05d23",
                                        color: "#fff",
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
                                <Post key={data.createdAt}>
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
                                                {data.name}
                                                <PostHeaderSpecial>
                                                    @{data.username}
                                                </PostHeaderSpecial>
                                            </PostHeaderText>

                                            <PostHeaderDescription>
                                                <p>{data.body} </p>
                                            </PostHeaderDescription>
                                        </div>

                                        <PostBodyImage src={data.imageUrl} />

                                        <div style={{
                                            borderBottom: '1px solid  #e6ecf0',
                                            marginBottom: '5px'
                                        }}/>

                                        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                                            <Box w="100%">
                                                <Center>
                                                    <AiOutlineLike
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "#261c15",
                                                        }}
                                                    />{" "}
                                                </Center>
                                            </Box>
                                            <Box w="100%" >
                                                <Center>
                                                    <VscComment
                                                        style={{
                                                            fontSize: "20px",
                                                            fontFamily: 'poppins',
                                                            color: "#261c15",
                                                        }}
                                                    />{" "}
                                                </Center>
                                            </Box>
                                        </Grid>
                                    </PostBody>
                                </Post>
                            ))}
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default FeedPost;
