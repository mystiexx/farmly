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
import firebase, { db } from "../fire";
import React, { useState, useEffect } from "react";
import { Spinner, Grid } from "@chakra-ui/react";
import { VscComment } from "react-icons/vsc";
import moment from "moment";

function FeedPost() {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [like, setLike] = useState(1);
    const [profileimage, setProfileImage] = useState(null);

    const handleLike = async (data) => {
        setLike(like + 1);
        if (data) {
           await db.collection('likes').add({
                postId: data
            })
            .then(()=> {
              db.collection("posts")
                .doc(data)
                .update({
                    likeCount: like,
                })
            })
        }
    };

    const getPost = () => {
        const user = firebase.auth().currentUser;
        if ( user !== null) {
            setProfileImage(user.photoURL)
        }
        db.collection("posts")
            .orderBy("createdAt", "desc")
            .get()
            .then((querySnapshot) => {
                // eslint-disable-next-line array-callback-return
                const documents = querySnapshot.docs.map((doc) => {
                    if (doc.exists) {
                        return { ...doc.data(), uid: doc.id };
                    }
                });
                setFeed(documents);
                setLoading(false);
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
                                            src={profileimage}
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
                                                <Text>{data.likeCount} like</Text>
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
