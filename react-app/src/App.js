import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

// Libs
import { Routes } from "./libs/Routes";

// Bootstrap Component
import { Container } from "react-bootstrap";

// Component
import Navbar from "./components/Navbar";

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
