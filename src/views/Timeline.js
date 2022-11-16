import React from 'react';
import Navbar from '../components/Navbar';
import Software from '../components/Software';

import "./Timeline.css";

//animation: Skroller.js
function Timeline () {
    return(
        <div id='timeline'>
            <Navbar />
            <div className='start'>
                <h1>Has the computer changed architecture? <br/>If so, how?</h1>   
                <div id='intro-description'>Computers have become an integral part of architectural design and delivery. 
                Multiple software have become the norm in architecture practices, 
                yet as we use them as architects, how much we actually know about 
                our tools? How did they change the way we design or even think?</div>
            </div>

            <Software
            img = {process.env.PUBLIC_URL + "/assets/form-z.png"}
            altTxt = "several geometric objects created using Form Z"
            description = "Developed in 1989, the software Form*Z has become an important digital tool for architects when exploring three dimensional objects, in particular when designing spaces which have complex shapes and multiple curved surfaces"
            name = "CATIA"
            />
            <Software
            img = {process.env.PUBLIC_URL + "/assets/catia.jpg"}
            altTxt = "several geometric objects created using Form Z"
            description = "Developed in 1989, the software Form*Z has become an important digital tool for architects when exploring three dimensional objects, in particular when designing spaces which have complex shapes and multiple curved surfaces"
            name = "FORM Z"
            />

            <p id='scroll-indicator'>SCROLL TO START</p>

        </div>
    )
}

export default Timeline;