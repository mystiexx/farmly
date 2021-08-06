/* eslint-disable default-case */
import React, { useState } from "react";
import {
    Box,
    Flex,
    Text,
    Input,
    Button,
    useToast,
    InputGroup,
    InputRightElement,
    Icon,
} from "@chakra-ui/react";
import firebase, { db } from "../fire";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import mage from "../images/image.jpg";

function Login() {
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClick = () => setShow(!show);

    const clearErrors = () => {
        setEmailError(" ");
        setPasswordError(" ");
    };

    const handleLogin = () => {
        setLoading(true);
        clearErrors();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                // eslint-disable-next-line default-case
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        setLoading(true);
        clearErrors();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                const uid = user.user.uid;
                db.collection("users").doc(user.user.uid).set({
                    uid,
                    email: email,
                    password: password,
                    username: username,
                    name: name,
                    createdAt: new Date().toISOString(),
                });
                if (user) {
                    localStorage.setItem("id", user.uid);
                    toast({
                        title: "Welcome.",
                        description: "Farmly",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        position: "top-right",
                    });
                }
            })

            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
                setLoading(false);
            });
    };

    return (
        <div>
            <Flex>
                <img src={mage} alt="right" style={{ width: "550px", height: "100vh" }} />

                <Box p={5} w="100%">
                    <Flex>
                        <Box style={{ marginTop: "100px" }} ml={4}>
                            {hasAccount ? (
                                <>
                                    <Text style={{ color: " #261c15", fontFamily: "poppins" }}>
                                        welcome
                                    </Text>
                                    <p
                                        style={{
                                            color: " #261c15",
                                            fontSize: "30px",
                                            fontFamily: "poppins",
                                            fontWeight: "800",
                                        }}
                                    >
                                        Sign in, into <br /> your account
                                    </p>
                                </>
                            ) : (
                                <>
                                    <Text style={{ color: " #261c15", fontFamily: "poppins" }}>
                                        welcome
                                    </Text>
                                    <p
                                        style={{
                                            color: " #261c15",
                                            fontSize: "30px",
                                            fontFamily: "poppins",
                                            fontWeight: "800",
                                        }}
                                    >
                                        fill the form <br />
                                        to become <br /> a member
                                    </p>
                                </>
                            )}
                        </Box>

                        <Box
                            p={5}
                            ml={5}
                            style={{
                                width: "50%",
                                height: "auto",
                                marginTop: "100px",
                            }}
                        >
                            {hasAccount ? (
                                <> </>
                            ) : (
                                <Input
                                    placeholder="Enter Name"
                                    type="text"
                                    mb={5}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            )}
                            <Input
                                mb={5}
                                placeholder="Enter Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Text
                                mt={-5}
                                mb={5}
                                style={{ fontFamily: "poppins", fontSize: "10px", color: "red" }}
                            >
                                {emailError}
                            </Text>
                            <InputGroup>
                                <Input
                                    placeholder="Enter Password"
                                    type={show ? "text" : "password"}
                                    mb={5}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <InputRightElement>
                                    <Button variant="link" size="sm" onClick={handleClick}>
                                        {show ? (
                                            <Icon
                                                as={AiFillEyeInvisible}
                                                style={{ fontSize: "20px", color: "#9A9A9A" }}
                                            />
                                        ) : (
                                            <Icon
                                                as={AiFillEye}
                                                style={{ fontSize: "20px", color: "#9A9A9A" }}
                                            />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Text
                                mt={-5}
                                mb={5}
                                style={{ fontFamily: "poppins", fontSize: "10px", color: "red" }}
                            >
                                {passwordError}
                            </Text>

                            {hasAccount ? (
                                <> </>
                            ) : (
                                <Input
                                    placeholder="Enter Username"
                                    type="text"
                                    mb={5}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            )}

                            {hasAccount ? (
                                <>
                                    <Button
                                        mb={2}
                                        onClick={handleLogin}
                                        disabled={loading}
                                        isLoading={loading}
                                        style={{
                                            width: "100%",
                                            backgroundColor: " #c5d86d",
                                            color: " #261c15",
                                        }}
                                    >
                                        Sign in
                                    </Button>
                                    <Text
                                        mt={2}
                                        style={{ fontFamily: "poppins", fontSize: "14px" }}
                                    >
                                        Not a user yet ?{" "}
                                        <Button
                                            variant="link"
                                            onClick={() => setHasAccount(!hasAccount)}
                                        >
                                            Sign up
                                        </Button>
                                    </Text>
                                </>
                            ) : (
                                <>
                                    <Button
                                        onClick={handleSignup}
                                        disabled={loading}
                                        isLoading={loading}
                                        mb={2}
                                        style={{
                                            width: "100%",
                                            backgroundColor: " #c5d86d",
                                            color: " #261c15",
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                    <Text
                                        mt={2}
                                        style={{ fontFamily: "poppins", fontSize: "14px" }}
                                    >
                                        Have an account ?{" "}
                                        <Button
                                            variant="link"
                                            onClick={() => setHasAccount(!hasAccount)}
                                        >
                                            Sign in
                                        </Button>
                                    </Text>
                                </>
                            )}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </div>
    );
}

export default Login;
