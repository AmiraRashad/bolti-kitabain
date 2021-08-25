import React from "react";git 
import Gridpage from "./components/Grid/Grid";
import Signin from "./components/sign-in/signIn";
import Signup from "./components/sign-up/signUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import AudioPlayer from "./components/audio-player/audioPlayer";
import tracks from "./components/audio-player/tracks";
function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
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
