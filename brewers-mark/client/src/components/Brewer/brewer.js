import React, { Component } from "react";
import './brewer.css'

export const BrewersCask = props => (
  <button className='btn btn-default cask'>
        <div>
          <h4 id='brewerh4'>{props.title}</h4>
          <a rel="noreferrer noopener" target="_blank" href={props.href}></a>
        </div>
  </button>
);

export default BrewersCask;
