import React from 'react';
import pourBeer from './manipulation/pourbeer.js'
import './BeerDisplay.css'
import $ from 'jquery'; 

class Glass extends React.Component {
  
  componentDidMount() {
    $('body').css('background-image' , 'url(./glassback.png)')
    pourBeer();
  }
  render() {
    return(
      <div id='mainglass'>
            <div id="containerbeer">
              <div id="glass">
                <div id='beer'></div>
              </div>
              <div id="pour"></div>
            </div>
      </div>
    );
  }
};

export default Glass

