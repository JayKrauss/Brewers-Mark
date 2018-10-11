import React, { Component } from "react";
import BottlesList from './bottleslist.js'
import BottlesBtn from './bottles.js'
import $ from 'jquery'; 
import IPAchainsign from '../../assets/images/IPAchainsign.png';
import IPAmove from './IPAmove.js'

class SourBottlesNav extends Component {

    state = {
      bottles: [{title:'Fruited Sours', href:'/'}, {title:'Berliner Sours',href:'/'}, {title:'Gose',href:'/'}, {title:'Others',href:'/'}],
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

export default SourBottlesNav;