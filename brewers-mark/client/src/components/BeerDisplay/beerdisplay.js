import React from 'react';
import pourBeer from './manipulation/pourbeer.js'
import './BeerDisplay.css'

class Glass extends React.Component {
  componentDidMount() {
    pourBeer()
  }

  render() {
    return(
      <div id='beermain'>
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

