import { TweetBox,
	TweetBoxForm,
	TweetBoxInput,
	TweetBoxInputI,
	TweetBoxButton,
	TweetBoxImage, } from '../Components/Feed.style';
import { BiImageAdd } from 'react-icons/bi'

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
						<BiImageAdd style={{ marginTop: '30px'}}/>
						<TweetBoxButton>Post</TweetBoxButton>
					</TweetBoxForm>
				</TweetBox>
		
	);
}

export default Share;
