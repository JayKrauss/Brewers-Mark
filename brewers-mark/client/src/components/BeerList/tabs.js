import React, { Component } from "react";
import './tabs.css'
import bubbles from '../Glass/manipulation/bubbles.js'



export const TabBtn = props => (

  <button className='btn btn-default beerbtn' onClick={() => props.onClick({ bid: props.bid,})}>
        <div className='beertab'>
        <marquee behavior="scroll" direction="left" scrollamount="3" className='tabsh4'>{props.title}</marquee>
          <a rel="noreferrer noopener" target="_blank" href={props.href}></a>
        </div>
  </button>

);

export default TabBtn;