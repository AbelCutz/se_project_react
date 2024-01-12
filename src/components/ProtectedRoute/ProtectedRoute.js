import react from "react";
import { Route, Redirect } from "react-router-dom";

const ProstectedRoute = ({ children, isLoggedIn, ...props }) => {
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={"/login"} />}
    </Route>
  );
};

export default ProstectedRoute;
