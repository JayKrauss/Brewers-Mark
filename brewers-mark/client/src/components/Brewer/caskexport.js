import React, { Component } from "react";
import CaskList from './casklist.js'
import BrewersCask from './brewer.js'
import $ from 'jquery'; 

class BrewerNav extends Component {

    state = {
      brewers: [{title:'IPA', href:'/IPA'}, {title:'LAGER',href:'lager'}, {title:'ALE',href:'ale'}, {title:'STOUT',href:'stout'}],
    };
    
    render() {
      return(
  
    <div>
    <CaskList>
        {this.state.brewers.map(brewers => {
          return (
            <BrewersCask
              key={brewers.title}
              title={brewers.title}
              href={brewers.href}
               />
          );
        })}
      </CaskList>
      </div>
      )}
}

export default BrewerNav;