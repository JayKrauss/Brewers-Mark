import React from 'react';
import $ from 'jquery'; 
import {TimelineMax, Sine} from 'gsap';

const bubbles = div => {
    var mainTl = new TimelineMax({ paused:false});

      var parentHeight = $(div).height()
      var parentWidth = $(div).width();

      $(div).append(new Array(150).join('<div class="bubble" />'));

      $(".bubble").each(function (i, bubble) {
          animateBubble(bubble);
      });

      function animateBubble(bubble) {
          var bubble = $(bubble);
          var bubbleHeight = bubble.height();
          var tl = new TimelineMax();
          tl
              .set(bubble, { y: function (index) { return (index + parentHeight * 1)}, scale: random(0.1, 0.2), x: random(1, 250), rotation: random(0, 360) })
              .to(bubble, 1, { x: "+=10", yoyo: true, repeat: 10, ease: Sine.easeInOut }, random(0, 30))
              .to(bubble, random(2, 30), { rotation: '+=360', y: String(-bubbleHeight), onComplete: animateBubble, onCompleteParams: [bubble] }, 0);
          return tl;
      }
      function random(min, max) {
          if (max == null) { max = min; min = 0; }
          return Math.random() * (max - min) + min;
      }
  }

export default bubbles;