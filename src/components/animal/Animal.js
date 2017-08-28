import React from 'react'
import {Button, Card, Icon, Image, Label} from 'semantic-ui-react'
import {FlatButton, RaisedButton, TextField} from "material-ui"

const Animal = (props) => {
    let color = "green"
    let meta = ""
    if ( props.animal && props.animal.sex === "male" ){
        props.parent ? meta = "Sire" : meta = "Some info"
        color = "blue"
    } else {
        color = "red"
        if (props.parent) {
            meta = "Dam"
        }
    }

    if (props.small) {
        return (
            <Card color={color}>
                <Card.Content>
                    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg'/>
                    <Card.Header>
                        { props.animal.id }
                    </Card.Header>
                    <Card.Meta>
                        {meta}
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='teal'>Inspect</Button>
                        <Button basic color='violet'>Change</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
    return (
        <Card color={color} style={{ width: "100%", height: "100%" }}>
            <Card.Content>
                <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg'/>
                <Card.Header>
                    { props.animal.id }
                </Card.Header>
                <Card.Meta>
                    {meta}
                </Card.Meta>
                <Card.Description>
                    <div style={{ display: "grid",
                        gridTemplateColumns: "1fr 1fr"
                    }}
                    >
                        <div>
                            <TextField
                                id="id-field"
                                defaultValue={ props.animal.id }
                            /><br />
                        </div>
                        <div>
                        </div>
                    </div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui three buttons'>
                    <Button basic color='green'>Update</Button>
                    <Button basic color='grey'>Reset</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default Animal
