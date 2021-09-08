import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Reset from "./Pages/Reset";
import Forgot from './Pages/Forgot';
import Admin from './Pages/Admin';


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
