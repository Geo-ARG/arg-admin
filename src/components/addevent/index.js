import React, {Component} from 'react'
import '../../App.css'
import {Grid, Image, Form, Button, TextArea} from 'semantic-ui-react'

export default class AddEvent extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Game Mangement - New Game</h1>
                <div>
                  <Image src='https://4.bp.blogspot.com/-JY1beh0o02M/V3DY9yPdCMI/AAAAAAAAAMI/NQUYgOQdx5MD0_4EQr82nWburZJp14ROwCLcB/s1600/unnamed.png'/>                  
                </div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Form>
                                <Form.Field>
                                    <label style={{
                                        float: 'left'
                                    }}>Geme Event</label>
                                    <input placeholder='Game Event'/>
                                </Form.Field>
                                <label style={{
                                    float: 'left'
                                }}>
                                    <b style={{
                                        fontSize: 'small'
                                    }}>Game Description</b>
                                </label>
                                <Form.Field control={TextArea} placeholder='Tell us more about event'/>
                                <Form.Field>
                                    <label style={{
                                        float: 'left'
                                    }}>Date Event</label>
                                    <input placeholder='Date Event'/>
                                </Form.Field>
                                <Form.Field>
                                    <label style={{
                                        float: 'left'
                                    }}>Location Event</label>
                                    <input placeholder='Location Event'/>
                                </Form.Field>
                                <Button positive>Save Game Event</Button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={6} style={{
                            backgroundColor: 'rgb(94, 189, 236)'
                        }}>
                            <p style={{
                                textAlign: 'left'
                            }}>
                                <b>Game Evet :
                                </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                            <p style={{
                                textAlign: 'left'
                            }}>
                                <b>Game Description :
                                </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p style={{
                                textAlign: 'left'
                            }}>
                                <b>Date Event :
                                </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                            <p style={{
                                textAlign: 'left'
                            }}>
                                <b>Location Event :
                                </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        )
    }
}
