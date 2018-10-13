import React from "react";
import './bottles.css';

function IPAmove(){
    const sign = document.getElementById("IPAchainsign");

    if (sign) {
      document.getElementById("IPAchainsign").classList.add("IPAmove");
    }
    
  };
  
  export default IPAmove;