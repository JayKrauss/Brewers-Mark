import React, { Component } from "react";
import './bottles.css'

export const BottlesBtn = props => (
  <button onClick={() => props.onClick({ parent: props.parent, child: props.child })} className='btn btn-default bottle'>
        <div>
          <h4 className='bottlesh4'>{props.title}</h4>
          <div rel="noreferrer noopener" target="_blank" href={props.href} parent={props.parent} child={props.child}></div>
        </div>
  </button>
);

export default BottlesBtn;