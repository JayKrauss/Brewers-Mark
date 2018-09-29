import React from "react";
import Landing from '../Landing/landing.js';
import BrewerNav from '../Brewer/caskexport.js'
import WelcomeChalkboard from '../WelcomeChalkboard/welcomechalkboard.js';
import SlideBoard from '../WelcomeChalkboard/SlideBoard.js'
import move from './move.js'
import $ from 'jquery'; 
import './home.css';

class Home extends React.Component {

  componentDidMount(){
    $('body').css('background-image' , 'url(./growler2.png)');

    function timedMove(){
    setTimeout(function () {
      move();
    }, 1000);
  }

  timedMove();
  }

  render(){
    return(
  <div id='mainhome' className='container-fluid'>
  <div className='row'>
  <div className='col-3'><WelcomeChalkboard /></div> 
    <div id='brewernav' className='col-6'>
    <center>
      <BrewerNav />
      </center>
      <br />
      <Landing />
    </div>
    <div className='col-3'></div>
    </div>
</div>
);
    }
  }
export default Home;