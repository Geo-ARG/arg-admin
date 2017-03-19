import React, {Component} from 'react'
import {Card, Image, Button} from 'semantic-ui-react'

export default class VerifyEvent extends Component {

    render() {
        return (
              <div className='VerifyImage'>
                <Card style={{marginRight:15}}>
                    <Image src='http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
                    <Card.Content>
                        <Card.Header>Username</Card.Header>
                        <Card.Meta>Location Event</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group>
                            <Button negative>Remove</Button>
                            <Button.Or/>
                            <Button positive>Confirm</Button>
                        </Button.Group>
                    </Card.Content>
                </Card>
                <Card style={{marginRight:15}}>
                    <Image src='http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
                    <Card.Content>
                        <Card.Header>Username</Card.Header>
                        <Card.Meta>Location Event</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group>
                            <Button negative>Remove</Button>
                            <Button.Or/>
                            <Button positive>Confirm</Button>
                        </Button.Group>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
