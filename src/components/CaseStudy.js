import { Heading } from 'grommet';
import React, {  useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Grommet } from 'grommet';

import "./CaseStudy.css";


const variant = {
    visible: { 
        opacity: 1, 
        y: 0, 
        transition:{duration: 1}
    },
    hidden: { 
        opacity: 0, 
        y: 100 
    }
}

const caseStudyTheme = {
    heading: {
        level: {
            3: {
                medium: {
                    size: "28px",
                    height: "30px",
                    maxWidth: "70vw"
                }
            }
        }
    }
}

const CaseStudy = (props) => {
    const control = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    useEffect(() => {
        if (isInView) {
            control.start('visible')
        }
    })

    return (
        <Grommet theme={caseStudyTheme} className='caseStudy'>
            <motion.div
            ref={ref}
            variants={variant}
            initial='hidden'
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
            }}
            animate={control}
            onClick={() => props.openPopup(props.projIndex)}
            >
                <Heading level='1'>
                    {props.softwareName}
                </Heading>
                <img src= {props.img}
                     alt={props.altTxt}/>
                <Heading level='3' size='medium' weight='normal'>
                    {props.projName}
                    <br/>
                    {props.projYear}
                </Heading>
            </motion.div>
        </Grommet>
        
        
    )
}

export default CaseStudy;