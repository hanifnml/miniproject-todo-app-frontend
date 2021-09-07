import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import UserDashboard from "../pages/UserDashboard";

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={UserDashboard} />
    </Switch>
  );
};
