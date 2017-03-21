import React, {Component} from 'react'
import {Grid, Icon, Card, Image, Button} from 'semantic-ui-react'

export default class VerifyEvent extends Component {

    render() {
        return (
          <div className='InputStyle'>
              <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <h3>VERIFY IMAGE</h3>
                      <div className="gameInfo">
                        <Icon name='game' size='big' />
                          <b>LIST EVENT</b>
                      </div>
                      <div className="listinfo">
                          <a href="#" >Pondok Indah Mall</a>
                      </div>
                      <div className="listinfo">
                          <a href="#" >Hacktiv8 Indonesia</a>
                      </div>
                    </Grid.Column>
                        <Grid.Column width={8}>
                          <div className='VerifyImage'>
                                <div style={{width: '20%', marginRight: "2%"}}>
                                  <Card style={{marginRight:15}}>
                                      <Image src='http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
                                      <Button positive>Confirm</Button>
                                      <Button negative>Remove</Button>

                                  </Card>
                                </div>
                                <div style={{width: '20%'}}>
                                  <Card style={{marginRight:15}}>
                                      <Image src='http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
                                      <Button positive>Confirm</Button>
                                      <Button negative>Remove</Button>
                                  </Card>
                                  </div>



                            </div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Card style={{marginRight:15}}>
                                <Image src='http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
                                <Card.Content>
                                    <Card.Header>Title Event</Card.Header>
                                    <Card.Meta>Location</Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                  </Grid.Row>

              </Grid>

          </div>
        )
    }
}

/*
<div className='VerifyImage'>
  <Card style={{marginRight:15}}>
      <Image src='http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
      <Card.Content>
          <Card.Header>Title Quest</Card.Header>
          <Card.Meta>Task</Card.Meta>
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
          <Card.Header>Title Quest</Card.Header>
          <Card.Meta>Task</Card.Meta>
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
*/
