import React, { Component } from 'react';
import { Box, Button, Carousel, Grommet, Heading } from 'grommet';
import { Close } from 'grommet-icons';
import './Popup.css';


const popupTheme = {
    global: {
        colors : {
          background: '#FEE5CA',
          text: '#B00E2F',
          icon: '#B00E2F'
        },
        font: {
          family: 'Monument Grotesk',
        },
      }
}

class Popup extends Component {
    render() {
        return (
            <Grommet theme={popupTheme}>
                <Box background='background' 
                    //  width='70vw' 
                    //  height='85vh' 
                     pad='large'>
                    <Box direction ='row' justify='between' align='start'>
                        <Heading level='1' size='medium' margin='0px'>
                            {this.props.title}
                        </Heading>
                        <Button icon={<Close size='large'/>} 
                                onClick={() => this.props.closePopup(false)}/>
                    </Box>

                    <Heading level='3' size='medium' 
                             margin={{top:'0', bottom: '10px'}} 
                             weight='normal'>
                            {this.props.subtitle}
                    </Heading>

                    <div className='line'></div>

                    <Box direction='row' 
                         justify='between' 
                         margin={{bottom: 'small'}} 
                         className='info'>
                        <p>{this.props.year}</p>
                        <p className='description'>{this.props.description}</p>
                    </Box>
                    <Box className='img-gallery'>
                        <Carousel controls='arrows' wrap>
                            {this.props.images.map((src, idx) => {
                                return <img
                                        key={idx}
                                        src={src}
                                        alt={this.props.alt}
                                        />
                            })}
                        </Carousel>
                        
                    </Box>
                </Box>
            </Grommet>
        );
    }
}

export default Popup;