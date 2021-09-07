import React from 'react'// Bootstrap Component
import { BrowserRouter as Router, useHistory, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function Navbar(props) {
  const history = useHistory();
  const navigateTo = (to) => {
    history.push(to);
  };
  return (
    <div>
      <Router>
        <Button onClick={() => navigateTo('/dashboard')} variant="primary">To Dashboard</Button>
      </Router>
    </div>
  )
}

export default Navbar
