import React, { Component } from "react";
import $ from 'jquery';
import { TimelineMax, Sine } from 'gsap';
import TabList from './tabslist.js'
import TabBtn from './tabs.js'
import './beerlist.css'
import css3 from 'compass';
import axios from "axios";
import { getISODay } from "date-fns";
import beerAPI from '../../utils/beerAPI';

function bubbles() {
  var mainTl = new TimelineMax({ paused: false });

  var parentHeight = $(".beertab").height();
  var parentWidth = $(".beertab").width();

  $(".beertab").append(new Array(100).join('<div className="bubble" />'));

  $(".bubble").each(function (i, bubble) {
    animateBubble(bubble);
  });

  function animateBubble(bubble) {
    var bubble = $(bubble);
    var bubbleHeight = bubble.height();
    var tl = new TimelineMax();
    tl
      .set(bubble, { y: function (index) { return (index + parentHeight * .8) }, scale: random(0.1, 0.2), x: random(1, 250), rotation: random(0, 360) })
      .to(bubble, 1, { x: "+=10", yoyo: true, repeat: 10, ease: Sine.easeInOut }, random(0, 30))
      .to(bubble, random(2, 30), { rotation: '+=360', y: String(-bubbleHeight), onComplete: animateBubble, onCompleteParams: [bubble] }, 0);
    return tl;
  }
  function random(min, max) {
    if (max == null) { max = min; min = 0; }
    return Math.random() * (max - min) + min;
  }
}

let bid;

class BeerList extends Component {
  state = {
    tab: [],
  };

  componentDidMount() {
    $('body').css('background-image', 'url(./beerlistback.png)')

    function blockAnimate() {
      $('.beertab').addClass('loading');
    };
    blockAnimate();

    axios.get('/api/admin/profile')
      .then(res => {
        console.log(res);
      });
  }

  handleClick = (bid) => {
    beerAPI.getById(bid)
      .then(() => this.props.history.push("/glass/:id?"));
  }

  render() {
    console.log(this.props);
    return (
      <div className='container' id='beerchunk'>
      <TabList>
        {this.props.beerList.map(prop => {
          return (
            <TabBtn
              key={prop.bid}
              title={prop.beer_name}
              bid={prop.bid}
            />
          );
        })}
      </TabList></div>
    )
  }
  /* <div className="carrousel">					
        <input type="radio" name="slides" id="radio-1" checked />
        <input type="radio" name="slides" id="radio-2" />
        <input type="radio" name="slides" id="radio-3" />
        <input type="radio" name="slides" id="radio-4" />
    <ul className="slides">        
          <li className="slide">
          <TabList>
              {this.state.tab.map(tab => {
                return (
                  <TabBtn
                    key={tab.title}
                    title={tab.title}
                    href={tab.href}
                     />
                );
              })}
            </TabList>
             </li>
          <li className="slide">
          <h1>Tab 2</h1>
             </li>
          <li className="slide">
          <h1>Tab 3</h1>
             </li>
          <li className="slide">
          <h1>Tab 4</h1>
             </li>
        </ul>
        <div className="slidesNavigation">
          <label htmlFor="radio-1" id="dotForRadio-1"></label>
          <label htmlFor="radio-2" id="dotForRadio-2"></label>
          <label htmlFor="radio-3" id="dotForRadio-3"></label>
          <label htmlFor="radio-4" id="dotForRadio-4"></label>
        </div>
  </div>        */

}

export default BeerList;