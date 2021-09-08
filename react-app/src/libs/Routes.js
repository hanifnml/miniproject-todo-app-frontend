import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import UnauthRoute from "./UnauthRoute";

// Pages
import UserDashboard from "../pages/UserDashboard";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

export const Routes = (props) => {
  return (
    <Switch>
      <UnauthRoute exact path="/" component={UserDashboard} />
      <AuthRoute exact path="/register" component={Registration} />
      <AuthRoute exact path="/login" component={Login} />
    </Switch>
  );
};
