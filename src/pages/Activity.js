import { FeedBox, PostAvatarImage } from '../Components/Feed.style';
import { MessageName } from '../Components/Message.style';
import { Box, CloseButton, Flex, Spacer, Text, VStack } from '@chakra-ui/react';
import Header from '../Components/Header';
import { FcLike, FcComments } from 'react-icons/fc';

function Activity() {
	return (
		<FeedBox>
			<Header />
			<div style={{ padding: '20px' }}>
                <VStack> 
                <Box
					w="100%"
					p={3}
					style={{ backgroundColor: '#D6CBB7', borderRadius: '5px' }}
					mt={3}
				>
					<Flex>
						<PostAvatarImage
							src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"
							alt="feed"
							height="40px"
						/>
						<MessageName>
							{' '}
							<Text mt="2" ml="3">
								Jane Doe like your post
							</Text>
						</MessageName>
						<FcLike style={{ marginTop: '10px', marginLeft: '5px' }} />
						<Text
							style={{ marginLeft: '30px', fontFamily: 'poppins', fontSize: '12px' }}
							mt="3"
						>
							3 mins ago{' '}
						</Text>
						<Spacer />
						<CloseButton />
					</Flex>
				</Box>

                <Box
					w="100%"
					p={3}
					style={{ backgroundColor: '#D6CBB7', borderRadius: '5px' }}
					mt={3}
				>
					<Flex>
						<PostAvatarImage
							src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"
							alt="feed"
							height="40px"
						/>
						<MessageName>
							{' '}
							<Text mt="2" ml="3">
								Jane Doe commented on your post
							</Text>
						</MessageName>
						<FcComments style={{ marginTop: '10px', marginLeft: '5px' }} />
						<Text
							style={{ marginLeft: '30px', fontFamily: 'poppins', fontSize: '12px' }}
							mt="3"
						>
							3 mins ago{' '}
						</Text>
						<Spacer />
						<CloseButton />
					</Flex>
				</Box>

                </VStack>
			
			</div>
		</FeedBox>
	);
}

export default Activity;
