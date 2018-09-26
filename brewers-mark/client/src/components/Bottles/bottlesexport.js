import React, { Component } from "react";
import BottlesList from './bottleslist.js'
import BottlesBtn from './bottles.js'

class BottlesNav extends Component {

    state = {
      bottles: [{title:'English IPA', href:'link1'}, {title:'West Coast IPA',href:'link2'}, {title:'East Coast IPA',href:'link3'}, {title:'Double IPA',href:'link4'}, {title:'Triple IPA',href:'link5'}, {title:'Session IPA',href:'link6'}, {title:'Black IPA',href:'link7'}, {title:'Belgian IPA',href:'link8'}, {title:'Grapefruit IPA',href:'link9'}],
    };
  
    render() {
      return(
  
    <div>
    <BottlesList>
        {this.state.bottles.map(bottles => {
          return (
            <BottlesBtn
              key={bottles.title}
              title={bottles.title}
              href={bottles.href}
               />
          );
        })}
      </BottlesList>
      </div>
      )}
}

export default BottlesNav;