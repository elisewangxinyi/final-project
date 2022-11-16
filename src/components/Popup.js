import React, { Component } from 'react';
import './Popup.css';


class Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='description'>
                    <div className='title'>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.subtitle}</h2>
                    </div>
                    <button onClick={() => this.props.closePopup(false)}>x</button>
                </div>
                <div className='img-gallery'>
                    <img className='popup-img' 
                    src= {this.props.img}
                    alt = {this.props.alt}/>
                </div>
            </div>
        );
    }
}

export default Popup;