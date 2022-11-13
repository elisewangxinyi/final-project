import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css';

function Homepage () {
    return(
        <div>
            <div id='title'>
                <h1>THE ARCHITECTURE <br/>MACHINE</h1>
                <button>ABOUT</button>
            </div>
            <div id='get-started'>
                <h2>How much do you know your tools?</h2>
                <Link to="/timeline">
                    <button>LET'S GO</button>
                </Link>
            </div>
        </div>
    )
}

export default Homepage;