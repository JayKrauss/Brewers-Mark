import react from 'react';
import beerColor from './beercolor.js'
import beerRise from './beerRise.js';

const beerPourTimed = () => {
    setTimeout(function () {
        document.getElementById("pour").classList.add("pouring");
    }, 300);
    beerColor();
    beerRise();
  }

  export default beerPourTimed;