import React, { Component } from 'react';
import './FamilyTree.css';
import {female, male, neutral} from "../../colors/colors"

class FamilyTree extends Component {
    render() {
        return (
            <div className="wrapper">
                <div style={{ height: '100%', borderColor: male }} className="father"/>
                <div style={{ height: '100%', borderColor: female  }} className="mother"/>
                <div style={{ height: '100%', borderColor: male }} className="main"/>
                <div style={{ height: '100%', borderColor: neutral  }} className="children"/>
                <div style={{ height: '100%' }} className="none"/>
            </div>
        );
    }
}

export default FamilyTree;
