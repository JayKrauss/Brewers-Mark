import React from "react";
import './welcomechalkboard.css';

const WelcomeChalkboard = () => (
    <div id='wcbackground'>
    <center>
        <br />
        <div id='wcheader'>
            <h2 id='wch2'>Welcome to Brewer's Mark!</h2>
            <hr />
        </div>
        <div id='wcbody'>
            <p class='wcp'>Today we have a fine selection of local breweries.</p>
            <p class='wcp'>Take a look around, you may find something you like.</p>
            <p class='wcp'>We've taken the area's top breweries and placed them at your fingertips. All of their offerings, all of their style, all for you.</p>
        </div>
        </center>
    </div>
)

export default WelcomeChalkboard;