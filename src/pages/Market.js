import { FeedBox } from "../Components/Feed.style";
import Header from "../Components/Header";
import Share from "../Components/Share";
import { Box, Flex, Avatar, Text, Image, Button } from "@chakra-ui/react";

function Market() {
    return (
        <FeedBox>
            <Header />
            <Share text={"What are you selling?"} />
            <Box w="100%" p={4} mb={5}>
                <Flex>
                    <Avatar src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"></Avatar>
                    <Text
                        mt={3}
                        ml={4}
                        style={{
                            color: " #261c15",
                            fontSize: "15px",
                            fontFamily: "poppins",
                            fontWeight: "800",
                        }}
                    >
                        John Doe
                    </Text>
                </Flex>
                <Text
                    mb={4}
                    mt={5}
                    style={{
                        color: " #261c15",
                        fontSize: "15px",
                        fontFamily: "poppins",
                        fontWeight: "400",
                    }}
                >
                    Functional Tractor for sale, interested buyers message me{" "}
                    <Button
					ml={3}
                        style={{
                            backgroundColor: " #c5d86d",
                            color: " #261c15",
                        }}
                    >
                        Send Message
                    </Button>{" "}
                </Text>

                <Image
                    src="https://technext.ng/wp-content/uploads/2020/03/tractor-image.jpg"
                    alt="post"
                />
            </Box>

			<Box w="100%" p={4} mb={3}>
                <Flex>
                    <Avatar src="https://thumbs.dreamstime.com/b/happy-curly-black-girl-clean-fresh-skin-perfect-smile-natural-beauty-portrait-happy-black-girl-clean-fresh-skin-165651791.jpg"></Avatar>
                    <Text
                        mt={3}
                        ml={4}
                        style={{
                            color: " #261c15",
                            fontSize: "15px",
                            fontFamily: "poppins",
                            fontWeight: "800",
                        }}
                    >
                        Jane Doe
                    </Text>
                </Flex>
                <Text
                    mb={4}
                    mt={5}
                    style={{
                        color: " #261c15",
                        fontSize: "15px",
                        fontFamily: "poppins",
                        fontWeight: "400",
                    }}
                >
                    Tubers of yam for sale
                    <Button
					ml={2}
                        style={{
                            backgroundColor: " #c5d86d",
                            color: " #261c15",
                        }}
                    >
                        Send Message
                    </Button>{" "}
                </Text>

                <Image
                    src="https://cdn.shopify.com/s/files/1/1588/4025/products/AdobeStock_72220865_1024x1024.jpg?v=1591310521"
                    alt="post"
                />
            </Box>
        </FeedBox>
    );
}

export default Market;
