import { FeedBox} from '../Components/Feed.style';
import Header from '../Components/Header';
import Share from '../Components/Share'

function Market() {
	return (
		<FeedBox>
				<Header/>
                <Share text={'What are you selling?'}/>
		</FeedBox>
	);
}

export default Market;
