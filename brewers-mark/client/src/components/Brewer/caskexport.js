import React, { Component } from "react";
import CaskList from './casklist.js'
import BrewersCask from './brewer.js'

class BrewerNav extends Component {

    state = {
      brewers: [{title:'Stone', href:'link1'}, {title:'Strangeways',href:'link2'}, {title:'Garden Grove',href:'link3'}, {title:'The Veil',href:'link4'}],
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