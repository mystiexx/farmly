import React from 'react';
import { FeedBox } from './Feed.style';
import Header from './Header';
import Share from './Share';
import FeedPost from './FeedPost';

function Feed() {
	
	return (
		<FeedBox>
			<Header />

			<Share text={'Share your thoughts'} />

			<FeedPost />

		</FeedBox>
	);
}

export default Feed;
