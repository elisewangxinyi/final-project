import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { Box, Button, Grommet, Layer } from 'grommet';

import Popup from "../Popup";

import "./Navbar.css";

//Exhibiiton description and images
const exhibitInfo = `Project "Architecture Machine" is based on the exhibition
                    "The Architecture Machine: The Role of Computers in Architecture"
                    at the Architekturmuseum der TUM in 2020. The exhibition took 
                    a comprehensive look at digital development in architecture, 
                    from its beginnings in the 1950s and 1960s to the present day.`

const images = [
    process.env.PUBLIC_URL + "/assets/exhibition1.jpg",
    process.env.PUBLIC_URL + "/assets/exhibition2.jpg",
    process.env.PUBLIC_URL + "/assets/exhibition3.jpg",
    process.env.PUBLIC_URL + "/assets/exhibition4.jpg",
]

//Grommet theme for Nav bar
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
          images = {images}
          alt = "images of the Architecture Machine Exhibition"
          year = '2003'
          description = {exhibitInfo}
          closePopup = {setPopup}/>
        </Layer>
        }
      </Box>
    </Grommet>
    
 
      

      

    

  );
};
  
export default Navbar;