import './App.css';

import { BrowserRouter } from 'react-router-dom';
// import Navbar from './Components/Navbar';

// Libs
import { Routes } from "./libs/Routes";

// Bootstrap Component
import { Container } from "react-bootstrap";

// Component
import Navbar from "./components/Navbar";

// FontAwesomeIcon
import './components/FontAwesomeIcon'

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
