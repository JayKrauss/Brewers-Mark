import React from "react";
import './chalk.css';
import chalkimg from '../../assets/images/chalk.png'

class Chalk extends React.Component {
render(){
    return(
  <div>
      <a href='/survey'>
  <img id='chalk' href='/survey' src={chalkimg} />
  </a>
  </div>
    )
}
}
export default Chalk;