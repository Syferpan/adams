import React, { Component } from 'react';
import './App.css';
import { Wrapper, Header, Content, Footer } from "../layout/"
import FamilyTree from "../familyTree/FamilyTree"
import { Nav, Navbar, NavItem} from "react-bootstrap"
import {FlatButton, List, ListItem, MuiThemeProvider} from "material-ui"
import NavHeader from "../header/NavHeader"
import {Side} from "../layout/Layout"

import { neutral } from "../../colors/colors"
import {GoSteps, GoPencil} from "react-icons/lib/go/index"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: true };
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    toggleVisibility = () => {
        console.log("Toggling", this.state.visible)
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <MuiThemeProvider>

                <Wrapper>
                    <Header>
                        <NavHeader />
                    </Header>
                    <Side>
                        <List>
                            <ListItem primaryText="Move" leftIcon={<GoSteps/>}/>
                            <ListItem primaryText="Treat" leftIcon={<GoPencil/>}/>
                        </List>
                    </Side>
                    <Content style={{ backgroundColor: neutral}}>
                        <FamilyTree/>
                    </Content>
                    <Footer>
                        <Navbar fixedBottom>
                            <Nav pullRight>
                                <NavItem eventKey={1}>© 2017 Syferpan Software</NavItem>
                            </Nav>
                        </Navbar>
                    </Footer>
                </Wrapper>
            </MuiThemeProvider>
        );
    }
}

export default App;
