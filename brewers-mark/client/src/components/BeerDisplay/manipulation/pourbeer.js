import react from 'react';
import beerPourTimed from './beerPourTimed';
import reverseRotation from './reverserotation'
import bubbles from './bubbles.js';


const pourBeer = () => {
    beerPourTimed();
    setTimeout(function () {
      document.getElementById("pour").classList.add("end");
      reverseRotation();
    }, 1500);
  }
  setTimeout(function () {
    pourBeer();
    bubbles();
  },3000);

  export default pourBeer;