import React, { Component } from 'react';
import "./CaseStudy.css";

class CaseStudy extends Component {
    render(){
        return(
            <div className='caseStudy'onClick={() => this.props.openPopup(true)}>
                <h3>{this.props.softwareName}</h3>
                <img src= {this.props.img}
                    alt="several geometric objects created using Form Z"/>
                <p>{this.props.projName}</p>
                <p>{this.props.projYear}</p>
            </div>
        )
        
    }
}

export default CaseStudy;