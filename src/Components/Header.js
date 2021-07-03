import { FeedHeader, FeedHeaderText } from '../Components/Feed.style';

function Header() {
	return (
				<FeedHeader>
					<FeedHeaderText>	{window.location.pathname.split('/')[2]}</FeedHeaderText>
				</FeedHeader>
		
	);
}

export default Header;
