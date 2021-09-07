import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import UserDashboard from "../pages/UserDashboard";
import Registration from "../pages/Registration";

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={UserDashboard} />
      <Route exact path="/register" component={Registration} />
    </Switch>
  );
};
