import { Box, Flex, Spacer, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import mage from "../images/image.jpg";

function Login() {
    return (
        <div>
            <Flex>
                <img src={mage} alt="right" style={{ width: "550px", height: "100vh" }} />

                <Box p={5} w="100%">
                    <Flex>
                        <Button style={{ backgroundColor: "#c5d86d", color: "#261c15" }}>
                            Sign up
                        </Button>
                        <Spacer />
                        <Button style={{ backgroundColor: "none", color: "#261c15" }}>
                            Sign in
                        </Button>
                    </Flex>

                    <Flex>
                        <Box style={{ marginTop: "100px" }} ml={4}>
                            <Text style={{ color:' #261c15', fontFamily:'poppins'}}>welcome</Text>
                            <p style={{ color:' #261c15', fontSize:'30px', fontFamily:'poppins', fontWeight:'800'}}>Sign in, into <br/>  your account</p>
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
                            <Input mb={5} placeholder="Enter Email" type="email" />

                            <Input placeholder="Enter Password" type="password" mb={5} />

                            <Button
                                mb={2}
                                style={{
                                    width: "100%",
                                    backgroundColor: " #c5d86d",
                                    color: " #261c15",
                                }}
                            >
                                Sign in
                            </Button>
                            <Link
                                style={{
                                    fontFamily: "poppins",
                                    fontSize: "14px",
                                    textDecoration: "underline",
                                }}
                            >
                                Forgot Password
                            </Link>
                            <Text mt={2} style={{ fontFamily: "poppins", fontSize: "14px" }}>
                                Not a user yet{" "}
                                <Link to="/signup" style={{ textDecoration: "underline" }}>
                                    Sign up
                                </Link>
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </div>
    );
}

export default Login;
