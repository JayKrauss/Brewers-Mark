import React from 'react';
import pourBeer from './manipulation/pourbeer.js'
import './BeerDisplay.css'
import $ from 'jquery'; 
import signmove from './signmove.js'
import namemove from './namemove.js'
import beername from '../../assets/images/beername.png'

class Glass extends React.Component {
  
  componentDidMount() {
    $('body').css('background-image' , 'url(./glassback.png)')
    pourBeer();
    signmove();
    namemove();
  }
  render() {
    return(
      <div className='container' id='holdingdiv'>
      <div className='row'>
        <div id='beername'>
        <img src={beername} />
        <center>
        <span id='beertitle'><strong>BEER NAME</strong></span>
        </center>
        </div>
      </div>
      <div className='row'>
      <div className='col-3'>
        <div id='leftinfo'></div>
      </div>
      <div id='mainglass' className='col-6'>
            <div id="containerbeer">
              <div id="glass">
                <div id='beer'></div>
              </div>
              <div id="pour"></div>
            </div>
      </div>
      <div className='col-3'>
        <div id='rightinfo'>
        </div>
      </div>
      </div>
      </div>
    );
  }
};

export default Glass

