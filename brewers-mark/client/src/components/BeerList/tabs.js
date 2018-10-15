import React, { Component } from "react";
import './tabs.css'
import bubbles from '../Glass/manipulation/bubbles.js'



export const TabBtn = props => (

  <a className='btn btn-default beerbtn'href={'glass/' + props.bid}>
        <div className='beertab'>
        <marquee behavior="scroll" direction="left" scrollamount="3" className='tabsh4'>{props.title}</marquee>
        </div>
  </a>
// onClick={() => props.onClick({ bid: props.bid,})}
);

export default TabBtn;