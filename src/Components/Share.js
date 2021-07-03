import { TweetBox,
	TweetBoxForm,
	TweetBoxInput,
	TweetBoxInputI,
	TweetBoxButton,
	TweetBoxImage, } from '../Components/Feed.style';

function Share(props) {
	return (
		<TweetBox>
					<TweetBoxForm>
						<TweetBoxInput>
							<TweetBoxImage src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg" />
							<TweetBoxInputI
								row="4"
								cols="50"
								placeholder={props.text}
								style={{ backgroundColor: '#E9E6E1' }}
							/>
						</TweetBoxInput>
						<TweetBoxButton>Post</TweetBoxButton>
					</TweetBoxForm>
				</TweetBox>
		
	);
}

export default Share;
