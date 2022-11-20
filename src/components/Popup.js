import React, { Component } from 'react';
import { Box, Button, Carousel, Grommet } from 'grommet';
import { Close } from 'grommet-icons';
import './Popup.css';

//TODO:
//carosel view needs to take a list of images
//reposively shrink title, subtitle and paragraph text size

const popupTheme = {
    global: {
        colors : {
          background: '#FEE5CA',
          text: '#B00E2F',
          icon: '#B00E2F'
        },
        font: {
          family: 'Roboto',
          size: '20px'
        },
      }
}

class Popup extends Component {
    render() {
        return (
            <Grommet theme={popupTheme}>
                <Box background='background' width='70vw' height='85vh' pad='35px'>
                    <Box direction ='row' justify='between' align='start'className='title'>
                        <h1>{this.props.title}</h1>
                        <Button icon={<Close size='large'/>} 
                                onClick={() => this.props.closePopup(false)}/>
                    </Box>
                    <h2 className='subtitle'>{this.props.subtitle}</h2>
                    <div className='line'></div>
                    <Box direction='row' justify='between' className='info'>
                        <p>{this.props.year}</p>
                        <p className='description'>{this.props.description}</p>
                    </Box>
                    <Box className='img-gallery'>
                        <Carousel controls='arrows'>
                            <Box align='center' justify='center'>
                                <img src= {this.props.img} alt = {this.props.alt}/>
                            </Box>
                            <Box align='center' justify='center'>
                                <img src= {this.props.img} alt = {this.props.alt}/>
                            </Box>
                        </Carousel>
                        
                    </Box>
                </Box>
            </Grommet>
        );
    }
}

export default Popup;