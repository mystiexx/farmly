import { FeedBox, PostBadge } from './Feed.style';
import {
	Post,
	PostAvatar,
	PostAvatarImage,
	PostBody,
	PostHeaderSpecial,
	PostHeaderText,
	PostHeaderDescription,
	PostBodyImage,
	PostFooter
} from './Feed.style';

import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';
import Header from './Header';
import Share from './Share';

function Feed() {
	return (
		<FeedBox>
			<Header />

			<Share text={'Share your thoughts'}/>

			<Post>
				<PostAvatar>
					<PostAvatarImage
						src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"
						alt="feed"
					/>
				</PostAvatar>

				<PostBody>
					<div className="post_header">
						<PostHeaderText>
							John Doe
							<PostHeaderSpecial>@johndoe</PostHeaderSpecial>
						</PostHeaderText>

						<PostHeaderDescription>
							<p>we a nice chicken </p>
						</PostHeaderDescription>
					</div>

					<PostBodyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7cIr3WqT9fpqrUky8KV1P-vb0ZNUwzsLxg&usqp=CAU" />

					<PostFooter>
						<PostBadge>
							<AiOutlineLike style={{ fontSize: '25px', color: '#775937' }} />{' '}
						</PostBadge>
						<PostBadge>
							<AiOutlineComment
								style={{
									fontSize: '25px',
									color: '#775937',
									marginLeft: '10px'
								}}
							/>{' '}
						</PostBadge>
					</PostFooter>
				</PostBody>
			</Post>

			<Post>
				<PostAvatar>
					<PostAvatarImage
						src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"
						alt="feed"
					/>
				</PostAvatar>

				<PostBody>
					<div className="post_header">
						<PostHeaderText>
							John Doe
							<PostHeaderSpecial>@johndoe</PostHeaderSpecial>
						</PostHeaderText>

						<PostHeaderDescription>
							<p>we a nice chicken </p>
						</PostHeaderDescription>
					</div>

					<PostBodyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7cIr3WqT9fpqrUky8KV1P-vb0ZNUwzsLxg&usqp=CAU" />

					<PostFooter>
						<PostBadge>
							<AiOutlineLike style={{ fontSize: '25px', color: '#775937' }} />{' '}
						</PostBadge>
						<PostBadge>
							<AiOutlineComment
								style={{
									fontSize: '25px',
									color: '#775937',
									marginLeft: '10px'
								}}
							/>{' '}
						</PostBadge>
					</PostFooter>
				</PostBody>
			</Post>
		</FeedBox>
	);
}

export default Feed;
