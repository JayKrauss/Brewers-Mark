import React from 'react';
import pourBeer from './manipulation/pourbeer.js'

const Glass = () =>  {
      return(
<div id='cover'>
  <br /><br /><br /><br /><br />
      <div id="containerbeer">
        <div id="glass">
          <div id='beer'></div>
        </div>
        <div id="pour"></div>
      </div>
</div>
  );
  pourBeer
};

export default Glass

