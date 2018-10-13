import React, { Component } from "react";
import BottlesList from './bottleslist.js'
import BottlesBtn from './bottles.js'
import $ from 'jquery'; 
import IPAchainsign from '../../assets/images/IPAchainsign.png';
import IPAmove from './IPAmove.js'
import beerAPI from '../../utils/beerAPI';

class StoutBottlesNav extends Component {

    state = {
      bottles: [{title:'Porter', href:'/', parent:'Porter', child:'Porter'}, {title:'American Stout',href:'/', parent:'Stout', child:'American'}, {title:'Imperial Stout',href:'/', parent:'Stout', child:'Imperial'}, {title:'Milk Stout',href:'/', parent:'Stout', child:'Milk'}, {title:'Oatmeal Stout',href:'/', parent:'Stout', child:'Oatmeal'}, {title:'Others',href:'/'}],
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
            .then(res => this.props.setBeerList(res.data))
            .then(() => this.props.history.push("/beerlist"));
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

export default StoutBottlesNav;