import React, { Component } from "react";
import './brewer.css'

export const BrewersCask = props => (
  <a href={props.href} className='btn btn-default cask'>
          <h4 id='brewerh4'>{props.title}</h4>
  </a>
);

export default BrewersCask;
