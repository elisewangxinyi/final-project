import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { Box, Button, Layer } from 'grommet';

import Popup from "../Popup";

import "./Navbar.css";
  
const Navbar = () => {
  const [popupSeen, setPopup] = useState(false);
  return (
    <Box tag='header' direction="row" style={{zIndex: "1"}} className="nav">
      <Button label='ABOUT' onClick={() => setPopup(true)}/>
      <Box direction="row" gap="medium">
        <Link to="/home">
            <Button label='HOME'/>
        </Link>
        <Link to="/timeline">
          <Button label='TIMELINE'/>
        </Link>
        <Link to="/projects">
          <Button label='PROJECTS'/>
        </Link>
      </Box>

      {popupSeen && 
      <Layer style={{zIndex: "2"}} position='center' onClickOutside={() => setPopup(false)}>
        <Popup
        title = "THE ARCHITECTURE MACHINE"
        subtitle = "THE ROLE OF COMPUTERS IN ARCHITECTURE"
        img = {process.env.PUBLIC_URL + "/assets/exhibition1.jpg"}
        alt = "image of the Architecture Machine Exhibition"
        closePopup = {setPopup}/>
      </Layer>
      }
    </Box>
 
      

      

    

  );
};
  
export default Navbar;