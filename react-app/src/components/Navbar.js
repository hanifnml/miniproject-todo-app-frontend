import React from "react"; // Bootstrap Component
import { BrowserRouter as Router, useHistory, Link } from "react-router-dom";

// Bootstrap Components
import Button from "react-bootstrap/Button";

// Redux
import { logoutUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

function Navbar(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const navigateTo = (to) => {
    history.push(to);
  };
  return (
    <div>
      <Router>
        <Button onClick={() => navigateTo("/")} variant="primary">
          To Dashboard
        </Button>
        <Button onClick={() => navigateTo("/register")} variant="primary">
          To Register
        </Button>
        <Button onClick={() => navigateTo("/login")} variant="primary">
          To Login
        </Button>
        <Button onClick={() => dispatch(logoutUser(history))} variant="primary">
          Logout
        </Button>
      </Router>
    </div>
  );
}

export default Navbar;
