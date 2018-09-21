import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Glass from './components/BeerDisplay/beerdisplay.js'

class App extends Component {
  render() {
    return(
      <div>
    <Glass />
    </div>
    )
  }
}

export default App;
