import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Reset from "./Pages/Reset";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/Reset' component={Reset} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
