import React from "react";
import Gridpage from "./Components/Grid/Grid";
import Signin from "./Components/SignIn/SignIn";
import Signup from "./Components/SignUp/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import AudioPlayer from "./Components/AudioPlayer/AudioPlayer";
import tracks from "./Components/AudioPlayer/tracks";
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
