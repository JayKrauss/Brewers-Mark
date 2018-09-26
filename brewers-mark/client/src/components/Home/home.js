import React from "react";
import Landing from '../Landing/landing.js';
import BrewerNav from '../Brewer/caskexport.js'
import WelcomeChalkboard from '../WelcomeChalkboard/welcomechalkboard.js'
import $ from 'jquery'; 
import './home.css';

class Home extends React.Component {
  componentDidMount(){
    $('body').css('background-image' , 'url(./growler2.png)')
  }

  render(){
    return(
  <div id='mainhome'>
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
    }
  }
export default Home;