import React, { Component } from "react";
import BottlesList from './bottleslist.js'
import BottlesBtn from './bottles.js'
import $ from 'jquery'; 
import IPAchainsign from '../../assets/images/IPAchainsign.png';
import IPAmove from './IPAmove.js'
import beerAPI from '../../utils/beerAPI';

class LagerBottlesNav extends Component {

    state = {
      bottles: [{title:'American Light Lager', href:'/', parent:'Lager', child:'American'}, {title:'Czech Lager',href:'/', parent:'Czech', child:'Czech'}, {title:'Kolsch Lager',href:'/', parent:'Kolsch', child:'Kolsch'}, {title:'Dark European Lager',href:'/', parent:'Lager', child:'European'}, {title:'Pilsner',href:'/', parent:'Pilsner', child:'Pilsner'}, {title:'Others',href:'/'}],
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
        handleClick = beer => {
          beerAPI.getMultiple(beer)
            .then(res => console.log(res));
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
                parent={bottles.parent}
                child={bottles.child}
                onClick={this.handleClick}
                 />
            );
          })}
        </BottlesList>
        </center>
        </div>
        )}
  }
export default LagerBottlesNav;