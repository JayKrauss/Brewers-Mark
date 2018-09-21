import React from 'react';
import './landing.css';

const Landing = () => (
    <div id='main'>
        <div>
        <form class="clearfix mb-4" action="POST">
            <div class="form-group">
              <br/>
              <label class="text-center" for="example-text"><p>Find Me:</p></label>
              <input type="text" id="example-text" class="form-control" aria-describedby="example-text" placeholder="Name Your Brew"/>
            </div>
            <a id='random' class='btn btn-light' href='glass'>Roll the Dice</a>
            <a id="submit" class="btn btn-light">Search</a>
          </form>
        </div>
    </div>
);


export default Landing;