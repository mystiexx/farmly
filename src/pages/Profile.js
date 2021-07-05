import { FeedBox, PostAvatarImage, PostHeaderSpecial } from '../Components/Feed.style';
import Header from '../Components/Header';
import { Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react';
import { FiEdit2, FiMail } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import FeedPost from '../Components/FeedPost';
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
	Input
	
  } from "@chakra-ui/react"

function Profile() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<FeedBox>
			 <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
			  <Text>Bio</Text>
			  <Textarea placeholder='enter bio' />

			  <Text>Location</Text>
			  <Input type='text' placeholder='Enter Location'/>
        
          </ModalBody>

          <ModalFooter>
        
          </ModalFooter>
        </ModalContent>
      </Modal>
			<Header />

			<div style={{ padding: '20px', borderBottom: '1px solid #D6CBB7' }}>
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
										fontFamily: 'poppins',
										fontWeight: '800',
										fontSize: '20px',
										color: '#775937',
										letterSpacing: '1px'
									}}
								>
									John Doe{' '}
								</Text>
								<PostHeaderSpecial style={{ marginTop: '5px', marginLeft: '4px' }}>
									@johndoe
								</PostHeaderSpecial>
							</Flex>

							<Text
								mb={2}
								style={{
									fontFamily: 'poppins',
									fontSize: '16px',
									fontWeight: '400',
									color: '#775937'
								}}
							>
								Hi, I own a poultry farm, we raise broilers
							</Text>
							<Flex>
								<Box
									p={3}
									style={{ backgroundColor: '#D6CBB7', borderRadius: '5px' }}
								>
									<Flex>
										<FiMail style={{color: '#775937'}}/>
										<Text
											ml={2}
											style={{
												fontFamily: 'poppins',
												fontSize: '12px',
												color: '#775937'
											}}
										>
											johndoe@mail.com
										</Text>
									</Flex>
								</Box>

								<Box
									ml={3}
									p={3}
									style={{ backgroundColor: '#D6CBB7', borderRadius: '5px' }}
								>
									<Flex>
										<IoLocationOutline style={{ color: '#775937'}}/>
										<Text
											ml={2}
											style={{
												fontFamily: 'poppins',
												fontSize: '12px',
												color: '#775937'
											}}
										>
											Yenagoa, Bayelsa State
										</Text>
									</Flex>
								</Box>
							</Flex>
                            <Flex mt={2}>
										<IoLocationOutline style={{color: '#775937'}}/>
										<Text
											ml={2}
											style={{
												fontFamily: 'poppins',
												fontSize: '12px',
												color: '#775937'
											}}
										>
											Joined 28 June
										</Text>
									</Flex>
						</Box>

						<Spacer />
						<IconButton
						onClick={onOpen}
							aria-label="Edit Profile"
							style={{ backgroundColor: 'none' }}
							icon={<FiEdit2 style={{ color: '#775937' }} />}
						/>
					</Flex>
				</Box>
			</div>
			<FeedPost />
		</FeedBox>
	);
}

export default Profile;
