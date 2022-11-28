import React, { useEffect, useState} from 'react';
import {Box, Grommet, Heading, Paragraph} from 'grommet';
import { config, useSpring, animated } from 'react-spring';
import { Fade } from "react-awesome-reveal";
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Software from '../components/Software';

import "./Timeline.css";

//TODO:
//check out animation: Skroller.js

//Text info:
const catiaInfo = `CATIA (an acronym of computer-aided three-dimensional 
                interactive application) is a multi-platform software suite for 
                computer-aided design (CAD), computer-aided manufacturing (CAM), 
                computer-aided engineering (CAE), 3D modeling and Product lifecycle 
                management (PLM), developed by the French company Dassault Systèmes.`

const formzInfo = `Form·Z is a general-purpose solid and surface modeling 
                software. It offers 2D/3D form manipulating and sculpting capabilities. 
                AutoDesSys, Inc. introduced 3D modeling software in the late 1980s. 
                With this in mind, form·Z was launched in 1991. 
                It arrived at a time when design was ruled by 2D drawings and has defined the 
                3D industry ever since.`

//Grommet custom theme
const timelineTheme = {
    global: {
        colors: {
            darkred: '#B00E2F',
            beige: '#FEE5CA', 
            text: 'beige'
        },
        font: {
            family: 'Inter'
        } 
    },

    paragraph: {
        medium: {
            size: '18px',
            height: '24px',
            maxWidth: '60vw',
          },
    }
}

function Timeline () {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
    
    const [cursorVariant, setCursorVariant] = useState('default')

    
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
            backgroundColor: "#FFF1FF"
        },
        explore: {
            width: 150,
            height: 150,
            x: mousePosition.x-75,
            y: mousePosition.y-75,
            backgroundColor: "#FFB1F1"
        }
    }

    const textEnter = () => {setCursorVariant("explore")};
    const textLeave = () => {setCursorVariant("default")}


    // react-spring animation
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 300,
        config: config.gentle,
        onRest: () => set(!flip),
    })
    
    

    return(
        <Grommet theme={timelineTheme} className='timeline'>
            <motion.div 
                className='cursor'
                variants={variants}
                animate={cursorVariant}/>
            <Navbar />
            
            <Box background='darkred' margin={{top: '10vh'}}>
                
                <Box pad={{horizontal:'large'}} 
                     height='90vh' 
                     direction='column'
                     justify='evenly' 
                     align='center'
                     className='start'>
                    <Fade direction='up'cascade damping={0.1}>
                        <Heading level='1' size='xlarge' 
                                 margin={{bottom: '10vh', top: '0px'}} 
                                 textAlign='end'>
                                Has the computer changed architecture? 
                                <br/>If so, how?
                        </Heading>
                        <Paragraph size='medium' textAlign='center'>
                            Computers have become an integral part of 
                            architectural design and delivery. Multiple software 
                            have become the norm in architecture practices, yet 
                            as we use them as architects, how much we actually 
                            know about our tools? How did they change the way we 
                            design or even think?
                        </Paragraph> 
                    </Fade>
                </Box>

                <Box className='timeline-software'>
                    <Software
                    mouseEnter = {textEnter}
                    mouseLeave = {textLeave}
                    svg = {process.env.PUBLIC_URL + "/assets/uuundulate.svg"}
                    img = {process.env.PUBLIC_URL + "/assets/catia.png"}
                    altTxt = "a car modeled in CATIA"
                    description = {catiaInfo}
                    name = "CATIA"
                    />
                    
                    <Software
                    mouseEnter = {textEnter}
                    mouseLeave = {textLeave}
                    svg = {process.env.PUBLIC_URL + "/assets/uuundulate (3).svg"}
                    img = {process.env.PUBLIC_URL + "/assets/form-z.png"}
                    altTxt = "several geometric objects created using Form Z"
                    description = {formzInfo}
                    name = "FORM Z"
                    />
                </Box>

                <animated.h1 style={props}>
                    <p id='scroll-indicator'>KEEP SCROLLING</p>
                </animated.h1>
            </Box>
        </Grommet>
        
    )
}

export default Timeline;