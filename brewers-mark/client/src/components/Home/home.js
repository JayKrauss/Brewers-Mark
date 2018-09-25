import React from "react";
import Landing from '../Landing/landing.js';
import BrewerNav from '../Brewer/caskexport.js'
import WelcomeChalkboard from '../WelcomeChalkboard/welcomechalkboard.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './home.css';

const Home = () => (
  <div id='display'>
    <div id='brewernav'>
    <center>
      <BrewerNav />
      </center>
      <br />
    </div>
    <div className='row'>
    <div className='col-2'><WelcomeChalkboard /></div>
    <div className='col-6'><Landing /></div>
    <div className='col-2'></div>
    </div>
  </div>
);

export default Home;