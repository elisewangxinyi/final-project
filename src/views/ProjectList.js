import React, {useState} from 'react';
import CaseStudy from '../components/CaseStudy';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';

import "./ProjectList.css";

//TODO:
//projects ease in like huarui's
function ProjectList () {
    const [popupSeen, setPopup] = useState(false);
    return(
        <div id='projects'>
            <Navbar />
            <div className='projList'>
                <CaseStudy
                softwareName = "FORM Z"
                img = {process.env.PUBLIC_URL + "/assets/form-z.png"}
                projName = "The Walter Segal Model"
                projYear = "1982"
                openPopup = {setPopup}
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