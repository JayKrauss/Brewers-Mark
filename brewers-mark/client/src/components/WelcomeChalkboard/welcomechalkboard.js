import React, { Component } from "react";
import './welcomechalkboard.css';
import ReactCSSTransitionGroup from 'react-transition-group';
import chainsign from '../../assets/images/chainsign.png';

class WelcomeChalkboard extends Component {

componentDidMount(){

}

    render(){
        return(
    <div id='wcbackground'>
    <center>
        <div id='chainsign'>
        <img src={chainsign} />
        </div>
    </center>
    </div>
        )
    }
}
export default WelcomeChalkboard;