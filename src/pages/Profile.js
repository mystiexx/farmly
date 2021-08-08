import React, { useState, useEffect } from "react";
import { FeedBox, PostAvatarImage, PostHeaderSpecial } from "../Components/Feed.style";
import Header from "../Components/Header";
import {
    Box,
    Flex,
    Spacer,
    Text,
    IconButton,
    Button,
    Image,
    Avatar,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { FiEdit2, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
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
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AiOutlineMore } from "react-icons/ai";
import firebase, { db } from "../fire";
import moment from "moment";
import {BiImageAdd} from 'react-icons/bi'
import Files from "react-files";

function Profile() {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [details, setDetails] = useState([]);
    const [profile, setProfile] = useState([]);
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [profileimage, setProfileImage] = useState(null);

    const FileChange = async (files) => {
        const file = files[0]
       const storageRef = firebase.storage().ref()
       const fileRef = storageRef.child(file.name)
       await fileRef.put(file)
       const fileUrl = await fileRef.getDownloadURL()
       setImage(fileUrl)
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

    const updateBio = () => {
        setLoading(true);
        const user = firebase.auth().currentUser;
        user.updateProfile({
            photoURL: image
        })
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

    const handleDelete = async (data) => {
        setLoading(true);
        await db
            .collection("posts")
            .doc(data)
            .delete()
            .then(() => {
                toast({
                    title: "Deleted.",
                    description: "We've deleted your post for you",
                    position: "top",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                window.location.href = "/user/profile";
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchProfile = async () => {
        const user = firebase.auth().currentUser;
        await db
            .collection("posts")
            .where("id", "==", user.uid)
            .get()
            .then((data) => {
                const documents = data.docs.map((doc) => {
                    return { ...doc.data(), uid: doc.id };
                });
                setProfile(documents);
                console.log(documents);
            });
    };

    const fetchUser = async () => {
        const user = firebase.auth().currentUser;
        if ( user !== null) {
            setProfileImage(user.photoURL)
        }
        db.collection("users")
            .where("uid", "==", user.uid)
            .get()
            .then((data) => {
                data.forEach((doc) => {
                    setBio(doc.data().bio);
                    setLocation(doc.data().location);
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
        fetchProfile();
    }, []);
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
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />

                        <Text>Location</Text>
                        <Input
                            type="text"
                            placeholder="Yenagoa, Bayelsa State"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </ModalBody>

                    <ModalFooter>
                    <Text mr={4} mt={3} style={{
                        fontSize:'10px',
                        fontFamily:'poppins'
                    }}>Change Profile Image: choose an image first</Text>
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
                            <IconButton aria-label="Search database" icon={<BiImageAdd />} />
                        </Files>
                        <Button
                        ml={3}
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

            <div style={{ padding: "20px", borderBottom: "1px solid #e6ecf0" }}>
                {details.map((data) => (
                    <Box w="100%" key={data.id}>
                        <Flex>
                            <PostAvatarImage
                                src={profileimage}
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

                                {data.bio === " " ? (
                                    <Text>Update Bio</Text>
                                ) : (
                                    <Text
                                        mb={2}
                                        style={{
                                            fontFamily: "poppins",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            color: " #261c15",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {data.bio}
                                    </Text>
                                )}

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

            {profile.map((data) => (
                <Box w="100%" p={4} mb={5} style={{ borderBottom: "1px solid #e6ecf0" }}>
                    <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(6, 1fr)" gap={4}>
                        <GridItem rowSpan={2}>
                            <Box p={4}>
                                <Avatar src={profileimage} />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={5}>
                            <Box style={{ marginLeft: "-40px" }}>
                                <Flex>
                                    <Text
                                        mt={5}
                                        style={{
                                            color: " #261c15",
                                            fontSize: "15px",
                                            fontFamily: "poppins",
                                            fontWeight: "800",
                                        }}
                                    >
                                        {data.name}
                                    </Text>
                                    <Spacer />
                                    <Menu>
                                        <MenuButton
                                            as={Button}
                                            rightIcon={
                                                <AiOutlineMore
                                                    style={{
                                                        fontSize: "20px",
                                                    }}
                                                />
                                            }
                                            style={{
                                                backgroundColor: "white",
                                            }}
                                        />

                                        <MenuList>
                                            <MenuItem onClick={() => handleDelete(data.uid)}>
                                                Delete
                                            </MenuItem>
                                            <MenuItem>Edit</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>

                                <Text
                                    mb={4}
                                    mt={2}
                                    style={{
                                        color: " #261c15",
                                        fontSize: "15px",
                                        fontFamily: "poppins",
                                        fontWeight: "400",
                                    }}
                                >
                                    {data.body}
                                </Text>

                                <Image
                                    src={data.imageUrl}
                                    alt="post"
                                    style={{
                                        borderRadius: "20px",
                                    }}
                                />
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            ))}
        </FeedBox>
    );
}

export default Profile;
