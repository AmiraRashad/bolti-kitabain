import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gridpage from './components/grid-page/GridPage';
import Signin from './components/sign-in/SignIn';
import Signup from './components/sign-up/SignUp';
import NavBar from './components/NavBar/NavBar';
import AudioPlayer from './components/audio-player/audioPlayer';
import tracks from './components/audio-player/tracks';

function App() {
	return (
		<Router>
			<NavBar/>

			<Switch>
				<Route path="/SignIn" component={Signin} />
				<Route path="/SignUp" component={Signup} />
				<Route
					path="/audioplayer"
					render={() => <AudioPlayer tracks={tracks} />}
				/>
				<Route path="/" component={Gridpage} />
			</Switch>
		</Router>
	);
}
export default App;
