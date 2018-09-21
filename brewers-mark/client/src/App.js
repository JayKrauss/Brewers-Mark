import React from "react";
import Nav from "./components/Nav";
import Landing from './components/Landing/landing.js';
import Logo from './components/Logo/logo.js'
import BrewerNav from './components/Brewer/caskexport.js'
import './app.css';

const App = () => (
  <div>
  <div id='nav'>
    <Nav />
  </div>
  <div id='display'>
    <div id='brewernav'>
    <center>
      <BrewerNav />
      </center>
    </div>
    <Landing />
  </div>
  </div>
);

export default App;
