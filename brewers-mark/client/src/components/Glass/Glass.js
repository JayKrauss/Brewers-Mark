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

    let EBC;

      let IPA ='IPA';
      let sour = 'Sour';
      let lager = 'Lager';
      let stout = 'Stout';

      if (this.state.beer.beer_style.includes(IPA)){
        EBC = 13
      }
      else if (this.state.beer.beer_style.includes(sour)){
        EBC = 25
      }
      else if (this.state.beer.beer_style.includes(lager)){
        EBC = 29
      }
      else if (this.state.beer.beer_style.includes(stout)){
        EBC = 45
      }  

    function beerColor() {
      
        if (EBC <= 11) {
          document.getElementById("beer").style.background="linear-gradient(white, rgb(184, 123, 28, .95),rgb(184, 123, 28, .95),rgb(184, 123, 28, .95), rgb(184, 123, 28, .95),rgb(184, 123, 28, .95))";
          document.getElementById("pour").style.background="linear-gradient(rgb(184, 123, 28), rgb(184, 123, 28),white)";
        }
        else if ((EBC > 11) && (EBC <= 19)) {
          document.getElementById("beer").style.background="linear-gradient(white, 	rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95),	rgb(191, 136, 21, .95))";
          document.getElementById("pour").style.background="linear-gradient(rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95), white)";
        }
        else if ((EBC >= 20) && (EBC <= 28)) {
          document.getElementById("beer").style.background="linear-gradient(white, 	rgb(114, 46, 24, .95),	rgb(114, 46, 24),	rgb(114, 46, 24), 	rgb(114, 46, 24),	rgb(114, 46, 24))";
          document.getElementById("pour").style.background="linear-gradient(rgb(114, 46, 24), 	rgb(114, 46, 24),white)";
        }
        else if ((EBC > 28) && (EBC <=36)) {
          document.getElementById("beer").style.background="linear-gradient(white,rgb(55, 30, 17, .95),rgb(55, 30, 17, .95),rgb(55, 30, 17, .95),rgb(55, 30, 17, .95),rgb(55, 12, 30, .95))";
          document.getElementById("pour").style.background="linear-gradient(#4b0c11,rgb(55, 12, 17), white)";
        }
        else if (EBC > 36){
          document.getElementById("beer").style.background="linear-gradient(white, rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1))";
          document.getElementById("pour").style.background="linear-gradient(rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), white)";
      }
    }

   beerColor();
    }
  }

  render() {
    return (
      <div className='container' id='holdingdiv'>
        <div className='row'>
          <div id='beername'>
            <img src={beername} />
            <center>
              <p id='beertitle'><strong>{this.state.beer.beer_name}</strong></p>
            </center>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <div id='leftinfo'>
            <div className='container' id='leftcont'>
              <p id='glassdescription'>{this.state.beer.beer_description}</p>
              </div>
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
              <div className='container' id='rightcont'>
              <h5 id='glassbrewery'>{this.state.beer.brewery_name}</h5>
              <p id='glasstype'>{this.state.beer.brewery_type}</p>
              <p id='glasstyle'>Style: {this.state.beer.beer_style}</p>
              <p id='glassABV'>ABV: {this.state.beer.beer_abv}</p>
              <p id='glassrating'>Beer Rating: {this.state.beer.rating_score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Glass

