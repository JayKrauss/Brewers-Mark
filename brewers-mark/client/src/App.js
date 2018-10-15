import React, { Component } from "react";
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home/home.js'
import Glass from './components/Glass/Glass.js'
import IPABottlesNav from './components/Bottles/IPAbottlesexport'
import SourBottlesNav from './components/Bottles/sourbottlesexport'
import LagerBottlesNav from './components/Bottles/lagerbottlesexport'
import StoutBottlesNav from './components/Bottles/stoutbottlesexport'
import BeerList from './components/BeerList/tabsexport'
import Survey from './components/Survey/survey.js'
import Signup from './components/Admin/signup.js'
import Profile from './components/Profile/profile.js'

class App extends Component {
  state = {
    beerList: [],
    beerID:[]
  }

  setBeerList = beers => {
    this.setState({ beerList: beers });
  }
  render() {
    return (
      <Router>
        <div id='display' className='container-fluid'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/glass/:id?" component={Glass} />
            <Route exact path="/IPA" component={(props) => <IPABottlesNav setBeerList={this.setBeerList} {...props} />} />
            <Route exact path="/lager" component={(props) => <LagerBottlesNav setBeerList={this.setBeerList} {...props} />} />
            <Route exact path="/sour" component={(props) => <SourBottlesNav setBeerList={this.setBeerList} {...props} />} />
            <Route exact path="/stout" component={(props) => <StoutBottlesNav setBeerList={this.setBeerList} {...props} />} />
            <Route exact path="/beerlist" component={(props) => <BeerList beerList={this.state.beerList}  {...props} />} />
            <Route exact path="/survey" component={Survey} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

  export default App;
