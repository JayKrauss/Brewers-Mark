import react from 'react';
import rotation from './rotation.js';

const beerRise = () => {
    rotation();
    document.getElementById(".beer").classList.add("fill");
    document.getElementById(".head").classList.add("active");
  }

  export default beerRise;