import React from 'react';
import CaseStudy from '../components/CaseStudy';
import Navbar from '../components/Navbar';

import "./ProjectList.css";


function ProjectList () {
    return(
        <div id='projects'>
            <Navbar />
            <div id='projList'>
                <CaseStudy
                softwareName = "FORM Z"
                img = {process.env.PUBLIC_URL + "/assets/form-z.png"}
                projName = "The Walter Segal Model"
                projYear = "1982"
                />
                <CaseStudy
                softwareName = "SOILD WORK"
                img = {process.env.PUBLIC_URL + "/assets/dunescape-shop.jpg"}
                projName = "DUNESCAPE, SHOP ARCHITECTS"
                projYear = "2003"
                />
                <CaseStudy
                softwareName = "SKETCH UP"
                img = {process.env.PUBLIC_URL + "/assets/form-z.png"}
                projName = "NAME TO BE REPLACED"
                projYear = "YEAR"
                />
                <CaseStudy
                softwareName = "AUTOCAD"
                img = {process.env.PUBLIC_URL + "/assets/dunescape-shop.jpg"}
                projName = "NAME TO BE REPLACED"
                projYear = "YEAR"
                />
            </div>    
        </div>
    )
}

export default ProjectList;