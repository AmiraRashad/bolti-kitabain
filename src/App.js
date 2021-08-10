import React from "react";
import Gridpage from "./Grid";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
  <Router>
    <div>
      <Gridpage />
    <ToastContainer>

    </ToastContainer>
    
    <Switch> 
      <Route path="Signin" ><Signin/></Route>
      <Route path="Signup" component={Signup}/>
      

    </Switch>
    </div>
     </Router>

    
  );
}
export default App;