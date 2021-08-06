import React, { useState, useEffect } from "react";
import { FeedBox, PostAvatarImage, PostHeaderSpecial } from "../Components/Feed.style";
import Header from "../Components/Header";
import { Box, Flex, Spacer, Text, IconButton, Button } from "@chakra-ui/react";
import { FiEdit2, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import FeedPost from "../Components/FeedPost";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Textarea,
    Input,
    useToast,
} from "@chakra-ui/react";
import firebase, { db } from "../fire";
import moment from "moment";


function Profile() {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [details, setDetails] = useState([]);
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);

  

    const updateBio = () => {
        setLoading(true);
        const user = firebase.auth().currentUser;
        db.collection("users")
            .doc(user.uid)
            .update({
                bio: bio,
                location: location,
            })
            .then(() => {
                toast({
                    title: "Done.",
                    description: "We've updated your profile for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                setLoading(false);
                window.location.href = "/user/profile";
            })
            .catch((error) => {
                toast({
                    title: "Error.",
                    description: error,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            });
    };

    const fetchUser = async () => {
        const user = firebase.auth().currentUser;
        db.collection("users")
            .where("uid", "==", user.uid)
            .get()
            .then((data) => {
                data.forEach((doc) => {
                    let post = [];
                    post.push({
                        email: doc.data().email,
                        name: doc.data().name,
                        createdAt: doc.data().createdAt,
                        username: doc.data().username,
                        bio: doc.data().bio,
                        location: doc.data().location,
                    });
                    setDetails(post);
                });
            });
    };

    useEffect(() => {
        fetchUser();
    });
    return (
        <FeedBox>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Bio</Text>
                        <Textarea
                            placeholder="enter bio"
                            onChange={(e) => setBio(e.target.value)}
                        />

                        <Text>Location</Text>
                        <Input
                            type="text"
                            placeholder="Yenagoa, Bayelsa State"
                            onChange={(e) => setLocation(e.target.value)}
                        />

                    
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            style={{
                                backgroundColor: "#c5d86d",
                                color: " #261c15",
                                fontFamily: "poppins",
                                fontWeight: "400",
                            }}
                            isLoading={loading}
                            disabled={loading}
                            onClick={updateBio}
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Header />

            <div style={{ padding: "20px", borderBottom: "1px solid #D6CBB7" }}>
                {details.map((data) => (
                    <Box w="100%">
                        <Flex>
                            <PostAvatarImage
                                src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"
                                alt="feed"
                                height="150px"
                            />
                            <Box mt={5} ml={5}>
                                <Flex>
                                    <Text
                                        style={{
                                            fontFamily: "poppins",
                                            fontWeight: "800",
                                            fontSize: "20px",
                                            color: " #261c15",
                                            letterSpacing: "1px",
                                        }}
                                    >
                                        {data.name}
                                    </Text>
                                    <PostHeaderSpecial
                                        style={{ marginTop: "5px", marginLeft: "4px" }}
                                    >
                                        @{data.username}
                                    </PostHeaderSpecial>
                                </Flex>

                                <Text
                                    mb={2}
                                    style={{
                                        fontFamily: "poppins",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        color: " #261c15",
                                    }}
                                >
                                    {data.bio}
                                </Text>
                                <Flex>
                                    <Box
                                        p={3}
                                        style={{ backgroundColor: "#e6ecf0", borderRadius: "5px" }}
                                    >
                                        <Flex>
                                            <FiMail style={{ color: " #261c15" }} />
                                            <Text
                                                ml={2}
                                                style={{
                                                    fontFamily: "poppins",
                                                    fontSize: "12px",
                                                    color: " #261c15",
                                                }}
                                            >
                                                {data.email}
                                            </Text>
                                        </Flex>
                                    </Box>

                                    <Box
                                        ml={3}
                                        p={3}
                                        style={{ backgroundColor: "#e6ecf0", borderRadius: "5px" }}
                                    >
                                        <Flex>
                                            <IoLocationOutline style={{ color: " #261c15" }} />
                                            <Text
                                                ml={2}
                                                style={{
                                                    fontFamily: "poppins",
                                                    fontSize: "12px",
                                                    color: " #261c15",
                                                    textTransform: "sentence",
                                                }}
                                            >
                                                {data.location}
                                            </Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                                <Flex mt={2}>
                                    <IoLocationOutline style={{ color: " #261c15" }} />
                                    <Text
                                        ml={2}
                                        style={{
                                            fontFamily: "poppins",
                                            fontSize: "12px",
                                            color: "#261c15",
                                        }}
                                    >
                                        Joined {moment(data.createdAt).format("MMM Do YY")}
                                    </Text>
                                </Flex>
                            </Box>

                            <Spacer />
                            <IconButton
                                onClick={onOpen}
                                aria-label="Edit Profile"
                                style={{ backgroundColor: "#c5d86d" }}
                                icon={<FiEdit2 style={{ color: " #261c15" }} />}
                            />
                        </Flex>
                    </Box>
                ))}
            </div>
            <FeedPost />
        </FeedBox>
    );
}

export default Profile;
