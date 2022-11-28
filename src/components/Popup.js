import React, { Component } from 'react';
import { Box, Button, Carousel, Grommet, Heading, Paragraph } from 'grommet';
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
          family: 'Inter',
        },
      }
}

class Popup extends Component {
    render() {
        return (
            <Grommet theme={popupTheme}>
                <Box background='background' width='70vw' height='85vh' pad='medium'>
                    <Box direction ='row' justify='between' align='start'>
                        <Heading level='1' size='large' margin='0px'>
                            {this.props.title}
                        </Heading>
                        <Button icon={<Close size='large'/>} 
                                onClick={() => this.props.closePopup(false)}/>
                    </Box>
                    <Heading level='2' size='large' margin={{vertical: '10px'}} weight='normal'>
                        {this.props.subtitle}
                    </Heading>
                    <div className='line'></div>
                    <Box direction='row' justify='between' 
                         margin={{bottom: 'small'}} className='info'>
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