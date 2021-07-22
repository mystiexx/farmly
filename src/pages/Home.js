import Feed from '../Components/Feed';
import Messages from '../Components/Messages';
import Sidebar from '../Components/Sidebar';
import { Container } from '../Components/Sidebar.style';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Market from './Market';
import Activity from './Activity';
import Login from './Login';
import { PageTransition } from '@steveeeie/react-page-transition';
import SignUp from './SignUp';
import Profile from './Profile';
import Chat from './Chat'

function Home() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Container>
					<Sidebar />
					<Route
						render={({ location }) => {
							return (
								<PageTransition
									preset="moveToLeftFromRight"
									transitionKey={location.pathname}
								>
									<Switch location={location}>
									<Route exact path="/user/feed" component={Feed} />
									<Route exact path="/user/market" component={Market} />
									<Route exact path="/user/activity" component={Activity} />
									<Route exact path="/user/profile" component={Profile} />
									<Route exact path='/user/chat' component={Chat}/>
									</Switch>
								</PageTransition>
							);
						}}
					/>
					<Messages />
				</Container>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default Home;
