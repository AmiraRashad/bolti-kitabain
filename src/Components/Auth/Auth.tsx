import* as React from "react";
import { withRouter } from "react-router-dom";
import { useStyles } from "./styles";

import userService from "../../services/UserService";
const Auth = (props:any) => {
  React.useEffect(() => {
    if (!userService.isLoggedin()) {
      props.history.push("/login");
    }
  }, []);
  return {props}; // children removed
};

export default withRouter(Auth);
