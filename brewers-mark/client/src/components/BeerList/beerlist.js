import React, { Component } from "react";
import $ from 'jquery'; 

class BeerList extends Component {

    state = {
      beers:[]
    };

    componentDidMount(){
        $('body').css('background-image' , 'url(./beerlistback.png)')
      }

      
    render() {
      return(
  
    <div id='beerlist'>
    
      </div>
      )}
}

export default BeerList;