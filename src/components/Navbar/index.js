import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { Box, Button, Grommet, Layer } from 'grommet';

import Popup from "../Popup";

import "./Navbar.css";

const navTheme = {
  global: {
    colors : {
      darkred: '#B00E2F',
      beige: '#FEE5CA',  
      text: 'beige'
    },
    font: {
      family: 'Inter',
    },
  },
  button: {
    border: {color: 'beige'}
  }
};

  
const Navbar = () => {
  const [popupSeen, setPopup] = useState(false);
  return (
    <Grommet theme={navTheme}>
      <Box tag='header' background='darkred' direction="row" style={{zIndex: "1"}} className="nav">
        <Button  label='ABOUT' className='btn-nav'
                 onClick={() => setPopup(true)}/>
        <Box direction="row" gap="medium">
          <Link to="/home">
              <Button label='HOME'className='btn-nav'/>
          </Link>
          <Link to="/timeline">
            <Button label='TIMELINE'className='btn-nav'/>
          </Link>
          <Link to="/projects">
            <Button label='PROJECTS' className='btn-nav'/>
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
    </Grommet>
    
 
      

      

    

  );
};
  
export default Navbar;