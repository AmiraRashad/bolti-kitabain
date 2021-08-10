import React from "react";
import Gridpage from "./Grid";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
  <Router>
    
    
    
    <Switch> 
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={Gridpage}/>

      

    </Switch>
    
     </Router>

    
  );
}
export default App;