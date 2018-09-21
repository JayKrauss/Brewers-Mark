import React, { Component } from "react";
import CaskList from './casklist.js'
import BrewersCask from './brewer.js'

class BrewerNav extends Component {

    state = {
      brewers: [{title:'Brewer One', href:'link1'}, {title:'Brewer Two',href:'link2'}, {title:'Brewer Three',href:'link3'}, {title:'Brewer Four',href:'link4'}],
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