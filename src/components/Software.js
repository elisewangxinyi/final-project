import { Box } from 'grommet';
import React, { Component } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Parallax } from 'react-scroll-parallax';


import "./Software.css";

class Software extends Component {
    render(){
        return(
            <Box className='software-container' 
                 pad={{horizontal: 'medium'}}
                 align='end'>
                
                {/* <div onMouseEnter={this.props.mouseEnter} 
                    onMouseLeave={this.props.mouseLeave}>

                </div> */}
                <img className='svgbg' src={this.props.svg}/>
                <img 
                    className='software-img' 
                    src={this.props.img}
                    alt={this.props.altTxt}
                    onMouseEnter={this.props.mouseEnter} 
                    onMouseLeave={this.props.mouseLeave}
                    />
                 
                <Parallax speed={15}>
                    <p>{this.props.description}</p>
                </Parallax>
                
                <Parallax translateY={['500px', '-200px']}>
                    <h1>{this.props.name}</h1>
                </Parallax>
                
            </Box>
        )
    }
}

export default Software;