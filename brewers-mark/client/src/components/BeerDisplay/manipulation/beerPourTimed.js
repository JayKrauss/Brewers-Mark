import react from 'react';
import rotation from './rotation.js';
import beerColor from './beercolor.js'
import beerRise from './beerRise.js';
import pourBeer from './pourbeer.js';

const beerPourTimed = () => {
    setTimeout(function () {
        document.getElementById("pour").classList.add("pouring");
    }, 300);
    beerColor();
    beerRise();
  }

  export default beerPourTimed;