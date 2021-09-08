import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Reset from "./Pages/Reset";
import Forgot from './Pages/Forgot';
import Admin from './Pages/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/resetpassword' component={Reset} />
          <Route exact path='/forgot-password' component={Forgot} />
          <Route exact path='/admin' component={Admin} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
