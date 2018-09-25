import react from 'react';
import rotation from './rotation.js';

const beerRise = () => {
    rotation();
    document.getElementById("beer").classList.add("fill");
  }

  export default beerRise;