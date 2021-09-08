import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UnauthRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!user ? <Redirect to="/login" /> : <Component {...props} />)}
  />
);

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(UnauthRoute);
