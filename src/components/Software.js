import React, { Component } from 'react';

import "./Software.css";

class Software extends Component {
    render(){
        return(
            <div id='software-container'>
                <img src={this.props.img}
                     alt={this.props.altTxt}/>
                <p>{this.props.description}</p>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Software;