import React from 'react';
import pourBeer from './manipulation/pourbeer.js'
import './BeerDisplay.css'
import $ from 'jquery';
import signmove from './signmove.js'
import namemove from './namemove.js'
import beername from '../../assets/images/beername.png'
import beerAPI from '../../utils/beerAPI';

class Glass extends React.Component {

  state = {
    beer: {}
  };

  componentDidMount() {
    $('body').css('background-image', 'url(./glassback.png)')
    pourBeer();
    signmove();
    namemove();

    const beerId = this.props.match.params.id;

    if (!beerId) {
      beerAPI.getRandom()
        .then(res => this.setState({ beer: res.data[0] }));
    }
    else {
      console.log("inside else")
      beerAPI.getById(beerId)
        .then(res => this.setState({ beer: res.data[0] }));
    }
  }

  render() {
    return (
      <div className='container' id='holdingdiv'>
        <div className='row'>
          <div id='beername'>
            <img src={beername} />
            <center>
              <span id='beertitle'><strong>{this.state.beer.beer_name}</strong></span>
            </center>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <div id='leftinfo'>
              {this.state.beer.beer_description}
              <p>Style: {this.state.beer.beer_style}</p>
              <p>ABV: {this.state.beer.beer_abv}</p>
            </div>
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

              <h5>{this.state.beer.brewery_name}</h5>
              <p>{this.state.beer.brewery_type}</p>
              <p>Beer Rating: {this.state.beer.rating_score}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Glass

