import React, { useState } from "react";
import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import fire from "../fire";
import mage from "../images/image.jpg";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState("");
    const [loading, setLoading] = useState(false);

    const clearErrors = () => {
        setEmailError(" ");
        setPasswordError(" ");
    };

    const handleLogin = () => {
        setLoading(true);
        clearErrors();
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                setEmailError(err.message);
                setPasswordError(err.message);
            });
        setLoading(false);
    };

    const handleSignup = () => {
        setLoading(true);
        clearErrors();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                setEmailError(err.message);
                setPasswordError(err.message);
            });
        setLoading(false);
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

                            <Input
                                placeholder="Enter Password"
                                type="password"
                                mb={5}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Text
                                mt={-5}
                                mb={5}
                                style={{ fontFamily: "poppins", fontSize: "10px", color: "red" }}
                            >
                                {passwordError}
                            </Text>

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
                                        <Text onClick={() => setHasAccount(!hasAccount)}>
                                            Sign up
                                        </Text>
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
                                        <Text onClick={() => setHasAccount(!hasAccount)}>
                                            Sign in
                                        </Text>
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
