import React from "react";
import Nav from "./components/Nav";
import Landing from './components/Landing/landing.js';
import Logo from './components/Logo/logo.js'
import BrewerNav from './components/Brewer/caskexport.js'
import WelcomeChalkboard from './components/WelcomeChalkboard/welcomechalkboard.js'
import './app.css';

const App = () => (
  <div id='display'>
  {/* <div id='nav'>
    <Nav />
  </div> */}
  <div>
  <br />
    <div id='brewernav'>
    <center>
      <BrewerNav />
      </center>
      <br /><br />
    </div>
    <div class='row'>
    <div class='col-3'><WelcomeChalkboard /></div>
    <div class='col-5'><Landing /></div>
    <div class='col-2'></div>
    </div>
  </div>
  </div>
);

export default App;
