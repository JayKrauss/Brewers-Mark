import React, { Component } from "react";
import './tabs.css'
import bubbles from '../Glass/manipulation/bubbles.js'



export const TabBtn = props => (
  <button className='btn btn-default beertab' onClick={() => props.onClick({ bid: props.bid,})}>
        <div>
          <h4 className='tabsh4'>{props.title}</h4>
          <a rel="noreferrer noopener" target="_blank" href={props.href}></a>
        </div>
  </button>
);

export default TabBtn;