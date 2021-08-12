import React from "react";
import Gridpage from "./Grid";
import Signin from "./Signin";
import Signup from "./Signup";
import audioPlayer from "./audioplayer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/audioplayer" component={audioPlayer} />
        <Route path="/" component={Gridpage} />
      </Switch>
    </Router>
  );
}
export default App;
