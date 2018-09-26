import React from "react";
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home/home.js'
import Glass from './components/Glass/Glass.js'
import BottlesNav from './components/Bottles/bottlesexport.js'
import BeerList from './components/BeerList/beerlist.js'

const App = () => (
  <Router>
    <div id='display' className='container-fluid'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/glass" component={Glass} />
        <Route exact path="/IPA" component={BottlesNav} />
        <Route exact path="/beerlist" component={BeerList} />
      </Switch>
</div>
  </Router>
);

export default App;
