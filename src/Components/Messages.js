import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'

function Messages() {
	const [ active, setActive ] = useState('Feed')
	return (
		<MessageBody>
			<MessageBox>
				<MessageHeader>Messages</MessageHeader>
				<InputGroup mt="2">
					<InputLeftElement pointerEvents="none" children={<BsSearch />} />
					<Input type="text" variant="filled" placeholder="Search.." />
				</InputGroup>

				<VStack>
				
					<Box w="100%">
					<Link to='/user/chat' onClick={()=>setActive('Chat')}>
						<MessageContainer key='Chat' className={active === 'Chat' ? 'linkActive' : ''}>
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
														backgroundColor: ' #f05d23',
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
						</Link>
					</Box>

					<Box w="100%">
					<Link to='/user/chat' onClick={()=>setActive('Chat')}>
						<MessageContainer key='Chat' className={active === 'Chat' ? 'linkActive' : ''}>
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
										<Avatar src="https://thumbs.dreamstime.com/b/happy-curly-black-girl-clean-fresh-skin-perfect-smile-natural-beauty-portrait-happy-black-girl-clean-fresh-skin-165651791.jpg">
											<AvatarBadge boxSize="1em" bg="green.500" />
										</Avatar>{' '}
									</Center>
								</GridItem>
								<GridItem colSpan={4}>
									<Box flex="1" p={4} ml={-5}>
										{' '}
										<Flex>
											<Box>
												<MessageName>Jane Doe</MessageName>
											</Box>
											<Spacer />
											<Box ml="5">
												<MessageTime> 10:00 </MessageTime>
											</Box>
										</Flex>
										<Box mt={2}>
											<Flex>
												<Message>Would like to buy... </Message>

												<Spacer />

												<div
													style={{
														width: '20px',
														height: '20px',
														backgroundColor: ' #f05d23',
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
															1
														</Text>
													</Center>
												</div>
											</Flex>
										</Box>
									</Box>
								</GridItem>
							</Grid>
						</MessageContainer>
						</Link>
					</Box>

					<Box w="100%">
					<Link to='/user/chat' onClick={()=>setActive('Chat')}>
						<MessageContainer key='Chat' className={active === 'Chat' ? 'linkActive' : ''}>
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
										<Avatar src="https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80">
										</Avatar>{' '}
									</Center>
								</GridItem>
								<GridItem colSpan={4}>
									<Box flex="1" p={4} ml={-5}>
										{' '}
										<Flex>
											<Box>
												<MessageName>Moses Sapele</MessageName>
											</Box>
											<Spacer />
											<Box ml="5">
												<MessageTime> 1:00 </MessageTime>
											</Box>
										</Flex>
										<Box mt={2}>
											<Flex>
												<Message>Thank you </Message>

												<Spacer />

											
											</Flex>
										</Box>
									</Box>
								</GridItem>
							</Grid>
						</MessageContainer>
						</Link>
					</Box>

					<Box w="100%">
					<Link to='/user/chat' onClick={()=>setActive('Chat')}>
						<MessageContainer key='Chat' className={active === 'Chat' ? 'linkActive' : ''}>
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
										<Avatar src="https://images.pexels.com/photos/3031391/pexels-photo-3031391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
										</Avatar>{' '}
									</Center>
								</GridItem>
								<GridItem colSpan={4}>
									<Box flex="1" p={4} ml={-5}>
										{' '}
										<Flex>
											<Box>
												<MessageName>Otis Olali</MessageName>
											</Box>
											<Spacer />
											<Box ml="5">
												<MessageTime> 1:00 </MessageTime>
											</Box>
										</Flex>
										<Box mt={2}>
											<Flex>
												<Message>Thank you </Message>

												<Spacer />

											
											</Flex>
										</Box>
									</Box>
								</GridItem>
							</Grid>
						</MessageContainer>
						</Link>
					</Box>
					
					


        
				</VStack>
			</MessageBox>
		</MessageBody>
	);
}

export default Messages;
