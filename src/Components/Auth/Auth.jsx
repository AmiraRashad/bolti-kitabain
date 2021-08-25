import React from "react";
import { withRouter } from "react-router-dom";
import { useStyles } from "./styles";

import userService from "../../services/userService";
const Auth = (props) => {
  React.useEffect(() => {
    if (!userService.isLoggedin()) {
      props.history.push("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Auth);
