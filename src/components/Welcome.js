import logo from '../light-bulb.svg';
import '../App.css';
import { NavLink } from 'react-router-dom';
import {Button} from "react-bootstrap/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <p>
          Welcome to <code>Power Me Up</code>. Click below to get started!
        </p>
        <br></br>
        <NavLink to="/environmental">
          <Button>GET STARTED</Button>
        </NavLink>
      </header>
    </div>
  );
}

export default App;