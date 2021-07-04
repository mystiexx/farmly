import { Box, Flex, Container, Center, Text, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SignUp() {
	return (
		<Container>
			<Flex>
				<Box
					p={5}
					style={{
						border: '2px solid #D6CBB7',
						width: '90%',
						height: 'auto',
						marginTop: '7%'
					}}
				>
					<Center mb={5}>
						<Text
							style={{
								fontFamily: 'poppins',
								fontWeight: '600',
								fontSize: '25px',
								color: '#826347'
							}}
						>
							Sign Up
						</Text>
					</Center>

					<Text
						mb={2}
						style={{
							fontFamily: 'poppins',
							fontSize: '15px',
							color: '#826347',
							fontWeight: '400'
						}}
					>
						Email
					</Text>
					<Input
						mb={5}
						variant="filled"
						placeholder="Enter Email"
						type="email"
						style={{ backgroundColor: '#D6CBB7' }}
					/>

					<Text
						mb={2}
						style={{
							fontFamily: 'poppins',
							fontSize: '15px',
							color: '#826347',
							fontWeight: '400'
						}}
					>
						Password
					</Text>
					<Input
						variant="filled"
						placeholder="Enter Password"
						type="password"
						mb={5}
						style={{ backgroundColor: '#D6CBB7' }}
					/>

					<Text
						mb={2}
						style={{
							fontFamily: 'poppins',
							fontSize: '15px',
							color: '#826347',
							fontWeight: '400'
						}}
					>
						Confirm Password
					</Text>
					<Input
						variant="filled"
						placeholder="Enter Password"
						type="password"
						mb={5}
						style={{ backgroundColor: '#D6CBB7' }}
					/>

					<Text
						mb={2}
						style={{
							fontFamily: 'poppins',
							fontSize: '15px',
							color: '#826347',
							fontWeight: '400'
						}}
					>
						Username
					</Text>
					<Input
						variant="filled"
						placeholder="Enter Password"
						type="text"
						mb={5}
						style={{ backgroundColor: '#D6CBB7' }}
					/>

					<Button style={{ width: '100%', backgroundColor: '#826347', color: '#CAB49C' }}>
						Sign Up
					</Button>
					<Text mt={2} style={{ fontFamily: 'poppins', fontSize: '14px' }}>
						Already Have an Account{' '}
						<Link to="/" style={{ textDecoration: 'underline' }}>
							Sign in
						</Link>
					</Text>
				</Box>
			</Flex>
		</Container>
	);
}

export default SignUp;
