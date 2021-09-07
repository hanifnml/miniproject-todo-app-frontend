import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Reset from "./Pages/Reset";
import Forgot from './Pages/Forgot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/resetpassword' component={Reset} />
          <Route exact path='/forgotpassword' component={Forgot} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
