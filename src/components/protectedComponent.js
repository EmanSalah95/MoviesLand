import React from "react";
import { Route, Redirect ,useLocation} from "react-router-dom";
// import auth from "./auth";

const ProtectedComponent = ({ component: Component, ...rest }) => {
  let auth = localStorage.getItem("auth");
  console.log('auth',auth);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> :  <Redirect to={{
                  pathname: "/register",
                  state: {
                    from: location
                  }
                }} />
      }
    />
  );
};

export default ProtectedComponent;
