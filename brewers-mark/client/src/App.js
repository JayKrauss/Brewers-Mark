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
import BeerList from './components/BeerList/tabsexport'
import Survey from './components/Survey/survey.js'
import Admin from './components/Admin/admin.js'
import Signup from './components/Admin/signup.js'


const App = () => (
  <Router>
    <div id='display' className='container-fluid'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/glass" component={Glass} />
        <Route exact path="/IPA" component={BottlesNav} />
        <Route exact path="/beerlist" component={BeerList} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/admin/login" component={Admin} /> */}
      </Switch>
</div>
  </Router>
);

export default App;
