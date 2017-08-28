import React, { Component } from 'react';
import './FamilyTree.css';
import {female, male, neutral2} from "../../colors/colors"
import Animal from "../animal/Animal"

class FamilyTree extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="father">
                    <Animal parent animal={{ sex: "male", id: "2015-02"}} small/>
                </div>
                <div className="mother">
                    <Animal parent animal={{ sex: "female", id: "2014-01" }} small/>
                </div>
                <div className="main">
                    <Animal animal={{
                        sex: "male",
                        id: "2017-06",
                        weight: 140,
                        pasture: "Syferpan",
                        comments: "Bought at auction, from Samuel L Jackson.",
                        sire: "2015-02",
                        dam: "2014-01",
                        birthDate: "2017-02-03",
                        weaned: true,
                        children: [
                            {
                                id: "2017-09",
                                birthDate: "2017-02-03",
                                weaned: true,
                                pasture: "Syferpan",
                                sire: "2017-06",
                                dam: "2016-01",
                                weight: 140,
                                sex: "male",
                            },
                            {
                                id: "2017-10",
                                birthDate: "2017-02-03",
                                weaned: false,
                                pasture: "Syferpan",
                                sire: "2017-06",
                                dam: "2017-01",
                                weight: 140,
                                sex: "male",
                            }
                        ]
                    }}/>
                </div>
                <div style={{ height: '100%', borderColor: neutral2  }} className="children"/>
            </div>
        );
    }
}

export default FamilyTree;
