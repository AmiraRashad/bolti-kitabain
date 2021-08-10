import React from "react";
import Gridpage from "./Grid";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter as Route,Switch,Router} from "react-router-dom";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
  <Router>
    <div>
      <Gridpage />
    <ToastContainer>

    </ToastContainer>
    </div>
    <Switch> 
      <Route path="./Signin" component={Signin}/>
      <Route path=".'Signup" component={Signup}/>
      

    </Switch>
     </Router>

    
  );
}
export default App;