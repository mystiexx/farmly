import {
	MessageBody,
	MessageBox,
	MessageHeader,
	MessageName,
	MessageTime,
	Message,
	MessageContainer
} from './Message.style';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { Flex, Box, Center, Spacer } from '@chakra-ui/react';
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';

function Messages() {
	return (
		<MessageBody>
			<MessageBox>
				<MessageHeader>Messages</MessageHeader>
				<InputGroup mt="2">
					<InputLeftElement pointerEvents="none" children={<BsSearch />} />
					<Input type="tel" variant="filled" placeholder="Search.." style={{ backgroundColor: '#D6CBB7'}} />
				</InputGroup>

				<VStack>
					<Box w="100%">
						<MessageContainer>
							<Grid
								h="80px"
								templateRows="repeat(2, 1fr)"
								templateColumns="repeat(5, 1fr)"
								gap={3}
								ml='2'
								mt="3"
							>
								<GridItem rowSpan={2} colSpan={1} mt="4">
									<Center>
										<Avatar src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg">
											<AvatarBadge boxSize="1em" bg="green.500" />
										</Avatar>{' '}
									</Center>
								</GridItem>
								<GridItem colSpan={4}>
									<Box flex="1" p={4} ml={-5}>
										{' '}
										<Flex>
											<Box>
												<MessageName>John Doe</MessageName>
											</Box>
											<Spacer />
											<Box ml="5">
												<MessageTime> 09:00 </MessageTime>
											</Box>
										</Flex>
										<Box mt={2}>
											<Flex>
												<Message>Hi, How are you... </Message>

												<Spacer />

												<div
													style={{
														width: '20px',
														height: '20px',
														backgroundColor: '#826347',
														borderRadius: '100%'
													}}
												>
													<Center>
														<Text
															style={{
																font: 'poppins',
																color: '#CAB49C',
																fontSize: '13px',
																fontWeight: '400'
															}}
														>
															2
														</Text>
													</Center>
												</div>
											</Flex>
										</Box>
									</Box>
								</GridItem>
							</Grid>
						</MessageContainer>
					</Box>

      

        
				</VStack>
			</MessageBox>
		</MessageBody>
	);
}

export default Messages;
