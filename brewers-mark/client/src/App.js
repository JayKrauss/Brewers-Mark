import React from "react";
import Nav from "./components/Nav";
import Landing from './components/Landing/landing.js';
import BrewerNav from './components/Brewer/caskexport.js'
import WelcomeChalkboard from './components/WelcomeChalkboard/welcomechalkboard.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Glass from './components/BeerDisplay/beerdisplay.js'
import './app.css';

const App = () => (
  <div id='display'>
  {/* <div id='nav'>
    <Nav />
  <br />
  </div> */}
    <div id='brewernav'>
    <center>
      {/* <BrewerNav /> */}
      </center>
      <br />
    </div>
    <div className='row'>
    <div className='col-2'></div>
    <div className='col-6'><Glass /></div>
    <div className='col-2'></div>
    </div>
  </div>
);

export default App;
