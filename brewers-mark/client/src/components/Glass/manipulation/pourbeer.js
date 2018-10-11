import react from 'react';
import $ from 'jquery'; 
import {TimelineMax, Sine} from 'gsap';

function beerRise() {
  rotation();
  beerfill();
}
function beerfill() {
  document.getElementById('beer').classList.add('fill');
}
function rotation() {
  document.getElementById("glass").classList.add("rotate");
}
function reverseRotation() {
  document.getElementById("glass").classList.add("rotateback");
}

function beerPourTimed() {
  document.getElementById("pour").classList.add("pouring");
  setTimeout(function () {
    beerColor();
    beerRise();
  }, 100);
}

function bubbles() {
  var mainTl = new TimelineMax({paused:false});

    var parentHeight = $('#beer').height()
    var parentWidth = $('#beer').width();

    $('#beer').append(new Array(150).join('<div class="bubble" />'));

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

function beerColor() {
  // var EBC = $("#beerebc").attr("value");
  var EBC = 15;
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

const pourBeer = () => {
    beerPourTimed();
    setTimeout(function () {
      document.getElementById("pour").classList.add("end");
      reverseRotation();
      bubbles();
    }, 2000);
  }

  export default pourBeer;