import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Box, Button, Heading, Grommet, Layer } from 'grommet';
import { motion } from 'framer-motion';


import Popup from '../components/Popup';
import './Homepage.css';

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

//Grommet theme for Homepage
const homeTheme = {
    global: {
        colors: {
            darkred: '#B00E2F',
            beige: '#FEE5CA', 
            control: 'darkred'
        },
        font: {
            family: 'Monument Grotesk',
        },
    },
    heading: {
        color: 'darkred',
        level: {
            1: {
                xlarge: {
                    size: "160px",
                    height: "170px"
                }
            }
        }
    },
}


function Homepage () {
    //Custom Cursor
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
    
    useEffect(() => {
    const mouseMove = (event) => {
        setMousePosition({
        x: event.clientX,
        y: event.clientY
        })
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
        window.removeEventListener("mousemove", mouseMove)
    }
    })
    
    const variants = {
        default: {
            x: mousePosition.x-12,
            y: mousePosition.y-12,
            backgroundColor: "#FFBCBC",
            transition: {
                type: "spring",
                mass: 0.5
            }
            
        }
    }
    //Popup Hook
    const [popupSeen, setPopup] = useState(false);
    
    return(
        <Grommet theme={homeTheme} >
            <motion.div 
                className='cursor'
                variants={variants}
                animate="default">
            </motion.div>
            <Box background='beige' 
                 align='center' 
                 justify='center'
                 height='100vh'>
                <Box width='100%' margin={{top: '10vh', bottom: '10vh'}}>
                    <Box direction='row'
                        background='beige'
                        justify='center'
                        width='100%'
                        margin={{bottom: '15px'}}
                        animation=
                        { 
                        {type: 'slideUp', delay: 300, duration: 500, size: 'large'}}
                        >
                        <Heading level='1'
                                 textAlign='center'
                                 size='xlarge'
                                 margin='0'>ARCHITECTURE 
                        </Heading> 
                    </Box>

                    <Box direction='row' justify='center'
                        background='beige'
                        width='100%'
                        margin={{bottom: '20px'}}
                        animation=
                        {
                        {type: 'slideDown', delay: 300, duration: 500, size: 'large'}}
                        >
                        <Heading level='1'
                                textAlign='center'
                                size='xlarge'
                                margin='0'>MACHINE
                        </Heading> 
                    </Box>
                </Box>
                
                <Box >
                    <Button onClick={() => setPopup(true)}>
                    <img src={process.env.PUBLIC_URL + "/assets/spin-btn-about.svg"}
                         alt='a spinning button that opens the About pop up of the exhibition'
                        className='btn-about'/>
                    </Button>
                    
                </Box>

                <Box className='get-started' 
                     margin={{top:'3%', bottom: '6%'}} 
                     align='center'>
                    <Heading level='3' 
                             textAlign='center'
                             weight='normal'
                             size='medium'>
                        HOW MUCH DO YOU KNOW ABOUT YOUR TOOLS?
                    </Heading>
                    <Link to="/timeline">
                        <Button id='btn-go'
                                size='large'
                                label="LET'S GO"/>
                    </Link>
                </Box>


                {popupSeen && 
                <Layer position='center' onClickOutside={() => setPopup(false)}>
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
    )
}

export default Homepage;