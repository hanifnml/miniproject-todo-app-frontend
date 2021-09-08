import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import UserDashboard from "../pages/UserDashboard";
import Registration from "../pages/Registration";
import Login from '../pages/Login'
import Reset from '../pages/Reset'
import Forgot from '../pages/Forgot'

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={UserDashboard} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path='/resetpassword' component={Reset} />
      <Route exact path='/forgotpassword' component={Forgot} />
    </Switch>
  );
};
