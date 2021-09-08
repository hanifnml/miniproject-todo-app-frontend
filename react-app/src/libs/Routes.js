import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import UserDashboard from "../Pages/UserDashboard";
import Registration from "../Pages/Registration";
import Login from '../Pages/Login'
import Reset from '../Pages/Reset'
import Forgot from '../Pages/Forgot'
import Admin from '../Pages/Admin'

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={UserDashboard} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path='/resetpassword' component={Reset} />
      <Route exact path='/forgotpassword' component={Forgot} />
      <Route exact path='/admin' component={Admin} />
    </Switch>
  );
};
