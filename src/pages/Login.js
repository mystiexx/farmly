import { Box, Flex, Container, Center, Text, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<Container>
			<Center>
				<Flex>
					<Box
						p={5}
						style={{
							border: '2px solid #775937',
							width: '90%',
							height: 'auto',
							marginTop: '25%'
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
								Sign in
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

						<Button
							mb={2}
							style={{ width: '100%', backgroundColor: '#826347', color: '#CAB49C' }}
						>
							Sign in
						</Button>
						<Link style={{ fontFamily: 'poppins', fontSize: '14px', textDecoration:'underline' }}>
							Forgot Password
						</Link>
						<Text mt={2} style={{ fontFamily: 'poppins', fontSize: '14px' }}>
							Not a user yet <Link to="/signup" style={{textDecoration:'underline'}}>Sign up</Link>
						</Text>
					</Box>
				</Flex>
			</Center>
		</Container>
	);
}

export default Login;
