import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GridPage from './Components/GridPage/GridPage';
import SignIn from './Components/SignIn/SignIn';
import Signup from './Components/SignUp/Signup';
import NavBar from './Components/NavBar/NavBar';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import tracks from './Components/AudioPlayer/tracks';

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={Signup} />
				<Route
					path="/audioplayer"
					render={() => <AudioPlayer tracks={tracks} />}
				/>
				<Route path="/" component={GridPage} />
			</Switch>
		</Router>
	);
}
export default App;
