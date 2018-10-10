import React from "react";
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
import IPABeerList from './components/BeerList/IPAtabsexport'
import StoutBeerList from './components/BeerList/stouttabsexport'
import SourBeerList from './components/BeerList/sourtabsexport'
import LagerBeerList from './components/BeerList/lagertabsexport'
import Survey from './components/Survey/survey.js'
import Admin from './components/Admin/admin.js'
import Signup from './components/Admin/signup.js'
import Profile from './components/Profile/profile.js'

const App = () => (
  <Router>
    <div id='display' className='container-fluid'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/glass" component={Glass} />
        <Route exact path="/IPA" component={IPABottlesNav} />
        <Route exact path="/lager" component={LagerBottlesNav} />
        <Route exact path="/sour" component={SourBottlesNav} />
        <Route exact path="/stout" component={StoutBottlesNav} />
        <Route exact path="/IPAbeerlist" component={IPABeerList} />
        <Route exact path="/lagerbeerlist" component={LagerBeerList} />
        <Route exact path="/stoutbeerlist" component={StoutBeerList} />
        <Route exact path="/alebeerlist" component={SourBeerList} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
</div>
  </Router>
);

export default App;
