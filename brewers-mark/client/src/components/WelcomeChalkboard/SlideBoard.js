import React, { Component } from "react";
import chainsign from '../../assets/images/chainsign.png';
import './welcomechalkboard.css';

const SlideBoard = ({ visible }) => (
    <div id="slideboard" className={visible ? 'slideIn' : 'slideOut'}>
    <img src={chainsign} />
    </div>
  )

  export default SlideBoard;