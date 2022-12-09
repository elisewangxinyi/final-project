import React, { useEffect, useState} from 'react';
import {Box, Grommet, Heading, Layer } from 'grommet';
import { config, useSpring, animated } from 'react-spring';
import { motion, useScroll, useTransform } from 'framer-motion';

import Navbar from '../components/Navbar';
import Software from '../components/Software';

import "./Timeline.css";



//Text info for each software:
const catiaInfo = `CATIA (an acronym of computer-aided three-dimensional 
                interactive application) is a multi-platform software suite for 
                computer-aided design (CAD), computer-aided manufacturing (CAM), 
                computer-aided engineering (CAE), 3D modeling and Product lifecycle 
                management (PLM), developed by the French company Dassault Systèmes.`

const autoCADInfo = `AutoCAD is a commercial computer-aided design (CAD) and 
                    drafting software application. Developed and marketed by Autodesk, 
                    AutoCAD was first released in December 1982 as a desktop app 
                    running on microcomputers with internal graphics controllers. 
                    Before AutoCAD was introduced, most commercial CAD programs 
                    ran on mainframe computers or minicomputers, with each CAD 
                    operator (user) working at a separate graphics terminal.`;

const formzInfo = `Form·Z is a general-purpose solid and surface modeling 
                software. It offers 2D/3D form manipulating and sculpting capabilities. 
                AutoDesSys, Inc. introduced 3D modeling software in the late 1980s. 
                With this in mind, form·Z was launched in 1991. 
                It arrived at a time when design was ruled by 2D drawings and has defined the 
                3D industry ever since.`

const rhinoInfo = `Rhinoceros (Rhino or Rhino3D) is a commercial 3D computer 
                 graphics and computer-aided design (CAD) application software 
                 that was developed by Robert McNeel & Associates in 1998. 
                 Rhinoceros geometry is based on the NURBS mathematical model, 
                 which focuses on producing mathematically precise representation 
                 of curves and freeform surfaces in computer graphics 
                 (as opposed to polygon mesh-based applications).`;

const revitInfo = `Revit is a building information modelling software. 
                The original software was developed by Charles River Software, 
                founded in 1997, renamed Revit Technology Corporation in 2000, 
                and acquired by Autodesk in 2002. Revit was intended to allow 
                architects and other building professionals to design and document 
                a building by creating a parametric three-dimensional model that 
                included both the geometry and non-geometric design and construction 
                information.`;
const ghInfo = `Grasshopper is a visual programming language and environment that 
                runs within the Rhinoceros 3D CAD application. The program was 
                created by David Rutten at Robert McNeel & Associates in 2007. 
                Programs are created by dragging components onto a canvas. 
                The outputs to these components are then connected to the inputs 
                of subsequent components.`;

// Software class
class Tool {
    constructor(name, bgSvg, image, altTxt, description, ui){
        this.name = name;
        this.bgSvg = bgSvg;
        this.image = image;
        this.altTxt = altTxt;
        this.description = description;
        this.ui = ui;
    }
}

//Software list
const softwares = [
    new Tool("CATIA",
            process.env.PUBLIC_URL + "/assets/uuundulate.svg",
            process.env.PUBLIC_URL + "/assets/catia.png",
            "a race car modeled in CATIA",
            catiaInfo,
            process.env.PUBLIC_URL + "/assets/catiaUI.jpg"),
    new Tool("AUTOCAD",
            process.env.PUBLIC_URL + "/assets/uuundulate1.svg",
            process.env.PUBLIC_URL + "/assets/autocad.png",
            "a 2D floor plan drawn in autoCAD",
            autoCADInfo,
            process.env.PUBLIC_URL + "/assets/autocadUI.png"),
    new Tool("FORM Z",
            process.env.PUBLIC_URL + "/assets/uuundulate3.svg",
            process.env.PUBLIC_URL + "/assets/form-z.png",
            "a 2D floor plan drawn in autoCAD",
            formzInfo,
            process.env.PUBLIC_URL + "/assets/formZUI.png"),
    new Tool("RHINOCEROS",
            process.env.PUBLIC_URL + "/assets/uuundulate2.svg",
            process.env.PUBLIC_URL + "/assets/rhino.png",
            "a NURB-based rhinoceros modeled in the software Rhino",
            rhinoInfo,
            process.env.PUBLIC_URL + "/assets/rhinoUI.jpg"),
    new Tool("REVIT",
            process.env.PUBLIC_URL + "/assets/uuundulate.svg",
            process.env.PUBLIC_URL + "/assets/revit.png",
            "a model of a mixed-use, four-floor building in Revit",
            revitInfo,
            process.env.PUBLIC_URL + "/assets/revitUI.jpg"),
    new Tool("GRASSHOPPER",
            process.env.PUBLIC_URL + "/assets/uuundulate4.svg",
            process.env.PUBLIC_URL + "/assets/gh.png",
            "a 2D floor plan drawn in autoCAD",
            ghInfo,
            process.env.PUBLIC_URL + "/assets/grasshopperUI.jpg")
];


//Grommet theme for Timeline page
const timelineTheme = {
    global: {
        colors: {
            darkred: '#B00E2F',
            beige: '#FEE5CA', 
            start: '#E0A170',
            text: 'beige'
        },
        font: {
            family: 'Monument Grotesk'
        } 
    },
    heading: {
        color: 'darkred',
        level: {
            1: {
                large: {
                    size: "85px",
                    height: "90px",
                    // maxWidth: "70vw"
                }
            },
            3: {
                medium: {
                    size: "26px",
                    height: "28px",
                    maxWidth: "70vw"
                }
            }
        }
    },
    paragraph: {
        color: 'darkred',
        medium: {
            size: '18px',
            height: '24px',
            maxWidth: '100%',
          },
    }
}

function Timeline () {
    //Custom Cursor
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
    
    const [cursorVariant, setCursorVariant] = useState('default')
    const [cursorText, setCursorText] = useState("");

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
            
        },
        explore: {
            width: 150,
            height: 150,
            x: mousePosition.x-75,
            y: mousePosition.y-75,
            backgroundColor: "#FEE5CA",
            color: "#B00E2F" 
        },
        userInterface: {
            opacity: 0,
            x: mousePosition.x-12,
            y: mousePosition.y-12,
        }
    }

    const textEnter = () => {
        setCursorText("EXPLORE")
        setCursorVariant("explore")
    };
    const textLeave = () => {
        setCursorText("")
        setCursorVariant("default")
    }

    const textEnterUI = () => {
        setCursorVariant("userInterface")
    }

    const textLeaveUI = () => {
        setCursorVariant("default")
    }


    // react-spring animation for 'keep scrolling' text
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

    // Spinning Timeline wheel
    const { scrollYProgress } = useScroll();
    const angle = useTransform(scrollYProgress, [0,1], [0, 360])
    

    //Pop up 
    const [popupSeen, setPopup] = useState(false);
    const [selectedTool, setTool] = useState(null);
    const openPopupOfSelectedTool = (index) => {
        setTool(softwares[index]);
        setPopup(true);
    };

    return(
        <Grommet theme={timelineTheme} className='timeline'>
            <motion.div 
                className='cursor'
                variants={variants}
                animate={cursorVariant}>
                <span className='cursorText'>{cursorText}</span>
            </motion.div>

            <Navbar />
            <Box background='beige' margin={{top: '10vh'}}>
                <Box pad={{horizontal:'large'}} 
                     height='90vh' 
                     direction='column'
                     justify='evenly' 
                     align='end'
                     animation={[
                        {type: 'fadeIn', delay: 750, duration: 500},
                        {type: 'slideUp', delay: 750, duration: 700, size: 'medium'}]}
                     className='start'>
                        <Heading level='1' size='large' 
                                 margin={{bottom: '0', top: '0'}} 
                                 textAlign='end'>
                                Has the Computer Changed Architecture? 
                                <br/>If So, How?
                        </Heading>
                        <Heading level='3' 
                                 size='medium' 
                                 weight='normal'
                                 textAlign='end'>
                            Computers have become an integral part of 
                            architectural design and delivery. Multiple software 
                            have become the norm in architecture practices, yet 
                            as we use them as architects, how much we actually 
                            know about our tools? How did they change the way we 
                            design or even think?
                        </Heading>                     
                </Box>

                <Box className='timeline-software'>
                    {softwares.map((software, idx)=>{
                            return <Software
                                    key = {idx}
                                    softwareIndex = {idx}
                                    name = {software.name}
                                    svg = {software.bgSvg}
                                    img = {software.image}
                                    alt = {software.altTxt}
                                    description = {software.description}
                                    mouseEnter = {textEnter}
                                    mouseLeave = {textLeave}
                                    openPopup = {openPopupOfSelectedTool}
                                    />
                    })}
                </Box>

                <motion.div
                    style={{rotate: angle}}
                    className="spin-timeline">
                    <img 
                        src={process.env.PUBLIC_URL + "/assets/timeline-wheel2.svg"}
                        alt = 'a timeline of all the software in a spinning wheel format'/>
                </motion.div> 
                
                <animated.div style={props}>
                    <p id='scroll-indicator'>KEEP SCROLLING</p>
                </animated.div>

                {popupSeen && 
                    <Layer className='user-interface' 
                           onClickOutside={() => setPopup(false)}
                           onMouseEnter={textEnterUI}
                           onMouseLeave={textLeaveUI}>
                        <img src={selectedTool.ui} alt='the user interface of software'/>
                    </Layer>
                }
            </Box>
        </Grommet>
        
    )
}

export default Timeline;