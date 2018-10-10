import React, { Component } from "react";
import BottlesList from './bottleslist.js'
import BottlesBtn from './bottles.js'
import $ from 'jquery'; 
import IPAchainsign from '../../assets/images/IPAchainsign.png';
import IPAmove from './IPAmove.js'

class LagerBottlesNav extends Component {

    state = {
      bottles: [{title:'American Light Lager', href:'/'}, {title:'Czech Lager',href:'/'}, {title:'Kolsch Lager',href:'/'}, {title:'Dark European Lager',href:'/'}, {title:'Pilsner',href:'/'}, {title:'Others',href:'/'}],
    };

    componentDidMount(){
        $('body').css('background-image' , 'url(./bottleback.png)')

        function IPAtimedMove(){
          setTimeout(function () {
            IPAmove();
          }, 1000);
        }
      
        IPAtimedMove();
        }
      
    render() {
      return(
  
    <div id='bottlenav'>
    <center>
      <img src={IPAchainsign} id='IPAchainsign'/>
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
      </center>
      </div>
      )}
}

export default LagerBottlesNav;