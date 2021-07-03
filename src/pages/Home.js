import Feed from '../Components/Feed';
import Messages from '../Components/Messages';
import Sidebar from '../Components/Sidebar';
import { Container } from '../Components/Sidebar.style';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Market from './Market';
import Activity from './Activity';
import { PageTransition } from '@steveeeie/react-page-transition';

function Home() {
	return (
		<Container>
			<Router>
				<Sidebar />

				<Route
					render={({ location }) => {
						return (
							<PageTransition preset="roomToBottom" transitionKey={location.pathname}>
								<Switch>
									<Route exact path="/user/feed" component={Feed} />
									<Route exact path="/user/market" component={Market} />
									<Route exact path="/user/activity" component={Activity} />
								</Switch>
							</PageTransition>
						);
					}}
				/>

				<Messages />
				<Redirect to="/user/feed" />
			</Router>
		</Container>
	);
}

export default Home;
