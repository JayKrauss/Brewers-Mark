import react from 'react';
import background from "../../assets/images/glassback.png"
import $ from 'jquery';

const glassBackground = () => {
    $('body').css('background-image' , background)
  }

  export default glassBackground;