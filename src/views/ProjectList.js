import React, { useEffect, useState} from 'react';
import { Box, Grommet, Layer } from 'grommet';
import { motion } from 'framer-motion';

import CaseStudy from '../components/CaseStudy';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';

import "./ProjectList.css";

//Images
const catiaProjImg = [
    process.env.PUBLIC_URL + "/assets/bmw-bubble.jpg",
    process.env.PUBLIC_URL + "/assets/bmw-bubble1.jpg",
    process.env.PUBLIC_URL + "/assets/bmw-bubble2.jpg",
    process.env.PUBLIC_URL + "/assets/bmw-bubble3.jpg"
];

const autoCadPorjImg = [
    process.env.PUBLIC_URL + "/assets/h2o1.jpg",
    process.env.PUBLIC_URL + "/assets/h2o2.jpg",
    process.env.PUBLIC_URL + "/assets/h2o3.jpg",
    process.env.PUBLIC_URL + "/assets/h2o4.jpg",
];

const formZProjImg = [
    process.env.PUBLIC_URL + "/assets/spiral-fold1.jpg",
    process.env.PUBLIC_URL + "/assets/spiral-fold2.jpg",
    process.env.PUBLIC_URL + "/assets/spiral-fold3.jpg",
    process.env.PUBLIC_URL + "/assets/spiral-fold4.jpg"
];

const rhinoProjImg = [
    process.env.PUBLIC_URL + "/assets/o14-1.png",
    process.env.PUBLIC_URL + "/assets/o14-2.jpg",
    process.env.PUBLIC_URL + "/assets/o14-3.jpg",
];

const revitProjImg = [
    process.env.PUBLIC_URL + "/assets/piedra1.jpg",
    process.env.PUBLIC_URL + "/assets/piedra2.jpg",
    process.env.PUBLIC_URL + "/assets/piedra3.jpg",
    process.env.PUBLIC_URL + "/assets/piedra4.jpg",

];

const ghProjImg = [
    process.env.PUBLIC_URL + "/assets/barclay1.jpg",
    process.env.PUBLIC_URL + "/assets/barclay2.jpg",
    process.env.PUBLIC_URL + "/assets/barclay3.jpg",
    process.env.PUBLIC_URL + "/assets/barclay4.jpg",
]

//Text Description
const catiaProjInfo = `BMW Bubble was one of the first digitally designed 
                       architectural blobs and was realized in full scale. After
                       the geometry was finalized, an analysis of the curvature 
                       was done in Rhinoceros. 2D drawings were made with AutoCAD 
                       and skin shop drawings were done in CATIA.`
const autoCadProjInfo = `H2Oexpo is Lars Spuybroek's first building and an 
                        early attempt to create a liquid, interactive, and 
                        computer-controlled interior. The pavilion is one of the 
                        first completely topologically implemented buildings and 
                        a digital experiment that adapts to the movements of visitors.`
const formZProjInfo = `The Victoria and Albert Museum Spiral was a proposed extension 
                        to the 19th-century London building. The project was 
                        abandoned in 2004 after much controversy and failing to attract 
                        the necessary funding. With the help of the computer, the 
                        kinked spiral was created by the rotation of a long, 3D wall segment, 
                        compressed or stretched at various angles. `
const rhinoProjInfo = `O-14 is a 22-story tall commercial tower in the DubaiBusinessBay. 
                        The architects used Rhinoceros and AutoCAD to randomize 
                        a set of arranged perofrations in the facade. However 
                        the scripted program produced versions that were too perfect. 
                        Only with manual interference were the architects able to 
                        create "arbitrary" variations. `
const revitProjInfo = `The house is located in the ecological community on a site of 1500m2. 
                        The constituents are a couple of 60 years old. The BIM system, 
                        in addition to reports, constitute representational elements 
                        included in the architecture, which help to understand the 
                        magnitudeof the house at every project stage.`
const ghProjInfo = `Barclays Center is a multi-purpose indoor arena in the New 
                    York City borough of Brooklyn. The arena's iconic exterior is 
                    built from 12,000 uniquely-shaped panels in weathered steel. 
                    After the geometry was established using Grasshopper, Rhinoceros, 
                    and CATIA, a model-based process was used to fabricate each facade 
                    element directly from the model.`

//Case Study Class
class Project {
    constructor(software, name, architect, year, images, altTxt, description){
        this.software = software;
        this.name = name;
        this.architect = architect;
        this.year = year;
        this.images = images;
        this.altTxt = altTxt;
        this.description = description
    }
}

//Project list
const projects = [
    new Project("CATIA",
                "BMW Bubble", 
                "BERNHARD FRANKEN WITH ABB ARCHITEKTEN",
                "1991-1999",
                catiaProjImg,
                "Images of the BMW Bubble Pavilion",
                catiaProjInfo
                ),
    new Project("AUTOCAD",
                "H2Oexpo", 
                "LARS SPUYBROEK",
                "1993-1997",
                autoCadPorjImg,
                "Images and construction drawing of the H2Oexpo Pavilion",
                autoCadProjInfo
                ),
    new Project("FORM Z",
                "V&A Museum Spiral", 
                "DANIEL LIBESKIND, CEICIL BALMOND",
                "1996-2004",
                formZProjImg,
                "Photos and model images of the spiral extension",
                formZProjInfo
                ),
    new Project("RHINOCEROS",
                "O-14", 
                "REISER + UMEMOTO RUR ARCHITECTURE",
                "2006-2011",
                rhinoProjImg,
                "Photos and elevation diagrams of O-14's facade",
                rhinoProjInfo
                ),
    new Project("REVIT",
                "Casa Piedra Blanca", 
                "PABLO LOBOS PEDRAL, ANGELO PETRUCELLI",
                "2018",
                revitProjImg,
                "Photos and contruction floor plans of Casa Piedra Blanca",
                revitProjInfo
                ),
    new Project("GRASSHOPPER",
                "Barclays Center", 
                "SHOP ARCHITECT",
                "2009-2012",
                ghProjImg,
                "Photos and contruction diagrams of Barclays Center",
                ghProjInfo
                ),        
]


//Grommet theme for Project list
const projectsTheme = {
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
}

function ProjectList () {
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
    const [popupSeen, setPopup] = useState(false);
    const [selectedProj, setProj] = useState(null);

    const openPopupOfSelectedProj = (index) => {
        setProj(projects[index]);
        setPopup(true);
    };

    return(
        <Grommet theme={projectsTheme} className='projects'>
            <motion.div 
                className='cursor'
                variants={variants}
                animate="default">
            </motion.div>
            <Navbar />
            <Box id='projList'
                 background='darkred' 
                 margin={{top: '10vh'}}
                 pad={{vertical: '10vh', horizontal: '10vw'}}
                 direction='row'
                 wrap
                 justify='evenly'
                 >
                    {projects.map((project, idx)=>{
                        return <CaseStudy
                                key = {idx}
                                projIndex = {idx}
                                softwareName = {project.software}
                                img = {project.images[0]}
                                altTxt = {project.altTxt}
                                projName = {project.name}
                                projYear = {project.year}
                                //functions that updates selected project 
                                //and open the popup
                                openPopup = {openPopupOfSelectedProj}
                                />
                    })}

                    {popupSeen && 
                    <Layer position='center' onClickOutside={() => setPopup(false)}>
                        <Popup
                        title = {selectedProj.name.toUpperCase()}
                        subtitle = {selectedProj.architect}
                        images = {selectedProj.images}
                        alt = {selectedProj.altTxt}
                        year = {selectedProj.year}
                        description = {selectedProj.description}
                        closePopup = {setPopup}/>
                    </Layer>
                    }
            </Box>
        </Grommet>
    )
}

export default ProjectList;