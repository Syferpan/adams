import React from 'react';
import {
    FlatButton, Toolbar, ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle, Avatar
} from "material-ui"
import {GoSquirrel, GoGlobe, GoHome, GoBug} from "react-icons/lib/go/index"

export default class NavHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1,
            value: 3,
        };

        this.goHome = this.goHome.bind(this)
    }

    goHome = (event) => {
        console.log(event)
        this.setState({
        });
    };

    render() {
        return (
            <Toolbar style={{ height: "55px"}} >
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text="Herd Online"/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton label="Home" icon={ <GoHome/> } onClick={this.goHome}/>
                    <FlatButton label="Animals" icon={ <GoSquirrel/> } />
                    <FlatButton label="Pastures" icon={ <GoGlobe/> } />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="User"/>
                    <Avatar
                        icon={<GoBug />}
                        color={"#4371ff"}
                        backgroundColor={"#ffffff"}
                        // size={30}
                    />
                </ToolbarGroup>
            </Toolbar>

        )
    }

}
