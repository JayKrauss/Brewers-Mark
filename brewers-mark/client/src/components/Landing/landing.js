import React from 'react';
import './landing.css';

const Landing = () => (
    <div id='landmain'>
        <div>
        <form className="clearfix mb-4" action="POST">
            <div className="form-group">
              <br/>
              <label className="text-center landtext" htmlFor="example-text"><p id='findme'>New in town?   </p></label>
              <a id='random' className='btn btn-light' href='glass'>Find a Random Beer</a>
            </div>
                       
          </form>
        </div>
    </div>
);


export default Landing;