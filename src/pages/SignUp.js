import { Box, Flex, Spacer, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import mage from "../images/image.jpg";

function SignUp() {
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
						<Link
                                style={{
                                    fontFamily: "poppins",
                                    fontSize: "16px",
                                    textDecoration: "none",
									color: "#261c15",
									fontWeight:'400'
									
                                }}
                            >
                                Sign in
                            </Link>
                      
                    </Flex>

                    <Flex>
                        <Box style={{ marginTop: "100px" }} ml={4}>
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
                            fill the form <br/> 
							to become <br/> a member
                            </p>
                        </Box>

                        <Box
                            p={5}
                            ml={5}
                            style={{
                                width: "50%",
                                height: "auto",
                                marginTop: "90px",
                            }}
                        >
                            <Input mb={5} placeholder="Enter Email" type="email" required/>

                            <Input placeholder="Enter Password" type="password" mb={5}  required/>



                            <Button
                                mb={2}
                                style={{
                                    width: "100%",
                                    backgroundColor: " #c5d86d",
                                    color: " #261c15",
                                }}
                            >
                                Sign up
                            </Button>
                            <Text mt={2} style={{ fontFamily: "poppins", fontSize: "14px" }}>
                                Already a user{" "}
                                <Link to="/s" style={{ textDecoration: "underline" }}>
                                    Sign in
                                </Link>
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </div>
    );
}

export default SignUp;
