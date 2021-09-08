import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

// Libs
import { Routes } from "./libs/Routes";

// Bootstrap Component
import { Container } from "react-bootstrap";

// Component
import Navbar from "./components/Navbar";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Container>
            <Routes />
          </Container>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
