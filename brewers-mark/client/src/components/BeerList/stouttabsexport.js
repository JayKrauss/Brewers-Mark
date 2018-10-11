import React, { Component } from "react";
import $ from 'jquery'; 
import {TimelineMax, Sine} from 'gsap';
import TabList from './tabslist.js'
import TabBtn from './tabs.js'
import './beerlist.css'
import css3 from 'compass';

function bubbles() {
    var mainTl = new TimelineMax({ paused:false});

      var parentHeight = $(".beertab").height();
      var parentWidth = $(".beertab").width();

      $(".beertab").append(new Array(100).join('<div class="bubble" />'));

      $(".bubble").each(function (i, bubble) {
          animateBubble(bubble);
      });

      function animateBubble(bubble) {
          var bubble = $(bubble);
          var bubbleHeight = bubble.height();
          var tl = new TimelineMax();
          tl
              .set(bubble, { y: function (index) { return (index + parentHeight * .8)}, scale: random(0.1, 0.2), x: random(1, 250), rotation: random(0, 360) })
              .to(bubble, 1, { x: "+=10", yoyo: true, repeat: 10, ease: Sine.easeInOut }, random(0, 30))
              .to(bubble, random(2, 30), { rotation: '+=360', y: String(-bubbleHeight), onComplete: animateBubble, onCompleteParams: [bubble] }, 0);
          return tl;
      }
      function random(min, max) {
          if (max == null) { max = min; min = 0; }
          return Math.random() * (max - min) + min;
      }
  }
  
class StoutBeerList extends Component {

    state = {
      tab:[{title:'Tropical IPA', url:'link?', div:'tab'},{title:'NonFizz IPA', url:'link?', div:'tab'},{title:'This IPA', url:'link?', div:'tab'},{title:'That IPA', url:'link?', div:'tab'},{title:'My IPA', url:'link?', div:'tab'},{title:'Your IPA', url:'link?', div:'tab'},{title:'What IPA', url:'link?', div:'tab'},{title:'Why IPA', url:'link?', div:'tab'},{title:'Whos IPA', url:'link?', div:'tab'},{title:'When IPA', url:'link?', div:'tab'},{title:'Now IPA', url:'link?', div:'tab'}]
    };

    

    componentDidMount(){
        $('body').css('background-image' , 'url(./beerlistback.png)')

        function blockAnimate(){            
            $('.beertab').addClass('loading');
          };
          blockAnimate();
      }
      
    render() {
      return(
        
<div id='tabnav'>
<center>
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
</center>
          </div>

      )}
}

export default StoutBeerList;