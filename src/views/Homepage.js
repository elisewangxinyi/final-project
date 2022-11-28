import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button, Layer } from 'grommet';

import Popup from '../components/Popup';
import './Homepage.css';

//TODO: fix title css to percentage of viewport
function Homepage () {
    const [popupSeen, setPopup] = useState(false);
    const exhibitInfo = `For the first time in the German-speaking world, 
                        the exhibition takes a comprehensive look at digital 
                        development in architecture. From its beginnings in the 
                        1950s and 1960s to the present day, the architecture 
                        museum tells this exciting story in four chapters and 
                        presents the computer as a drawing machine, a design 
                        tool, a storytelling medium, and an interactive 
                        communication platform. The fundamental question behind 
                        it is simple: has the computer changed architecture, and 
                        if so, how?`
    return(
        <div>
            <div id='title'>
                <h1>THE ARCHITECTURE <br/>MACHINE</h1>
                <Button id='testtest'
                label='ABOUT' 
                size='medium'
                hoverIndicator={{color: '#B00E2F'}}
                onClick={() => setPopup(true)}/>
                
            </div>
            <div id='get-started'>
                <h2>How much do you know your tools?</h2>
                <Link to="/timeline">
                    <Button primary label="LET'S GO"/>
                </Link>
            </div>
            
            {popupSeen && 
            <Layer position='center' onClickOutside={() => setPopup(false)}>
                <Popup
                title = "THE ARCHITECTURE MACHINE"
                subtitle = "THE ROLE OF COMPUTERS IN ARCHITECTURE"
                img = {process.env.PUBLIC_URL + "/assets/exhibition1.jpg"}
                alt = "image of the Architecture Machine Exhibition"
                year = '2003'
                description = {exhibitInfo}
                closePopup = {setPopup}/>
            </Layer>
            }
        </div>
    )
}

export default Homepage;