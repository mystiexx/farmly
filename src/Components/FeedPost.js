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
import { Box, Center, Text } from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";
import { db } from "../fire";
import React, { useState, useEffect } from "react";
import { Spinner, Grid } from "@chakra-ui/react";
import { VscComment } from "react-icons/vsc";
import moment from "moment";

function FeedPost() {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [like, setLike] = useState(0);

    const handleLike = (data) => {
        setLike(like + 1);
        db.collection("posts")
            .doc(data)
            .update({
                likeCount: like,
            })
            .then(() => {
                db.collection("posts")
                    .doc(data)
                    .onSnapshot((doc) => {
                        console.log("Current data: ", doc.data());
                        return { ...doc.data(), uid: doc.id };
                    });
                setLoading(false);
            });
    };

    const getPost = () => {
        db.collection("posts")
            .orderBy("createdAt", "desc")
            .get()
            .then((querySnapshot) => {
                // eslint-disable-next-line array-callback-return
                const documents = querySnapshot.docs.map((doc) => {
                    return { ...doc.data(), uid: doc.id };
                });
                setFeed(documents);
                setLoading(false);
                console.log(documents);
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
                            {feed.map((data, id) => (
                                <Post key={id}>
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

                                                <PostHeaderSpecial>
                                                    {moment(data.createdAt)
                                                        .startOf("hour")
                                                        .fromNow()}
                                                </PostHeaderSpecial>
                                            </PostHeaderText>

                                            <PostHeaderDescription>
                                                <p>{data.body} </p>
                                            </PostHeaderDescription>
                                        </div>

                                        <PostBodyImage src={data.imageUrl} />

                                        <Box mt={3}>
                                            {data.likeCount <= 0 ? (
                                                <> </>
                                            ) : (
                                                <Text>{data.likeCount} likes</Text>
                                            )}
                                        </Box>

                                        <div
                                            style={{
                                                borderBottom: "1px solid  #e6ecf0",
                                                marginTop: "10px",
                                                marginBottom: "5px",
                                            }}
                                        />

                                        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                                            <Box w="100%">
                                                <Center>
                                                    <div className='hover'>
                                                    <AiOutlineLike
                                                        onClick={() => handleLike(data.uid)}
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "#261c15",
                                                        }}
                                                    />{" "}
                                                    </div>
                                                  
                                                </Center>
                                            </Box>
                                            <Box w="100%">
                                                <Center>
                                                    <VscComment
                                                        style={{
                                                            fontSize: "20px",
                                                            fontFamily: "poppins",
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
