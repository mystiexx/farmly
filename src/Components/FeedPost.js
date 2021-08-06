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
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { db } from "../fire";
import React, { useState, useEffect } from "react";

function FeedPost() {
    const [feed, setFeed] = useState([]);

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
    }, []);
    return (
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
                                John Doe
                                <PostHeaderSpecial>@johndoe</PostHeaderSpecial>
                            </PostHeaderText>

                            <PostHeaderDescription>
                                <p>{data.body} </p>
                            </PostHeaderDescription>
                        </div>

                        <PostBodyImage src={data.imageUrl} />

                        <PostFooter>
                            <PostBadge>
                                <AiOutlineLike style={{ fontSize: "25px", color: "#775937" }} />{" "}
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
    );
}

export default FeedPost;
