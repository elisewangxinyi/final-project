import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Popup from '../components/Popup';
import './Homepage.css';

function Homepage () {
    const [popupSeen, setPopup] = useState(false);
    return(
        <div>
            <div id='title'>
                <h1>THE ARCHITECTURE <br/>MACHINE</h1>
                <button onClick={() => setPopup(true)}>ABOUT</button>
            </div>
            <div id='get-started'>
                <h2>How much do you know your tools?</h2>
                <Link to="/timeline">
                    <button>LET'S GO</button>
                </Link>
            </div>
            {popupSeen && 
            <Popup
            title = "THE ARCHITECTURE MACHINE"
            subtitle = "THE ROLE OF COMPUTERS IN ARCHITECTURE"
            img = {process.env.PUBLIC_URL + "/assets/exhibition1.jpg"}
            alt = "image of the Architecture Machine Exhibition"
            closePopup = {setPopup}/>}
        </div>
    )
}

export default Homepage;