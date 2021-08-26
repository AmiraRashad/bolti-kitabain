import* as React from 'react';
import { withRouter } from "react-router-dom";
import userService from "../../services/UserService";

const Admin = (props:any) => {
  React.useEffect(() => {
    if (!userService.isAdmin()) {
      props.history.push("/login");
    }
  }, []);
  return {props}; // children removed
  
};

// export default withRouter(Admin);
