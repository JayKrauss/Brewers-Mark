import React, { Component } from "react";
import './bottles.css'

export const BottlesBtn = props => (
  <button className='btn btn-default bottle'>
        <div>
          <h4 class='bottlesh4'>{props.title}</h4>
          <a rel="noreferrer noopener" target="_blank" href={props.href}></a>
        </div>
  </button>
);

export default BottlesBtn;