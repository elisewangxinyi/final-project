import { Box } from 'grommet';
import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';



import "./Software.css";

class Software extends Component {
    render(){
        return(
            <Box className='software-container' 
                 pad={{horizontal: 'medium'}}
                 align='end'
                 
            >
                <img className='svgbg' 
                     src={this.props.svg}
                     alt ='an svg background with orange undulating lines'/>
                <img 
                    className='software-img' 
                    src={this.props.img}
                    alt={this.props.altTxt}
                    onClick={() => this.props.openPopup(this.props.softwareIndex)}
                    onMouseEnter={this.props.mouseEnter} 
                    onMouseLeave={this.props.mouseLeave}
                    />
                 
                <Parallax translateY={['-20', '10']}>
                    <p>{this.props.description}</p>
                </Parallax>
                
                <Parallax translateY={['400', '-90']}>
                    <h1>{this.props.name}</h1>
                </Parallax>
                
            </Box>
        )
    }
}

export default Software;