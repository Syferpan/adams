import React, { Component } from 'react';
import './App.css';
import {Wrapper, Header, Content, Footer} from "../../containers/layout/"

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <h1>Header</h1>
                </Header>
                <Content>
                    <h2>Content</h2>
                </Content>
                <Footer>
                    <h2>Footer</h2>
                </Footer>
            </Wrapper>
        );
    }
}

export default App;
