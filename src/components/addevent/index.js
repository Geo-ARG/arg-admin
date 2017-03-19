import React, {Component} from 'react'
import '../../App.css'
import {Grid, Image, Form, Button, TextArea} from 'semantic-ui-react'
const DatePicker = require('react-datepicker');
const moment = require('moment');
import GMaps from '../../../public/gmaps.min.js'
import '../../App.css'

require('react-datepicker/dist/react-datepicker.css');

export default class AddEvent extends Component {
  constructor(){
    super()
    this.state = {
      startDate: moment()
  }
}
  componentDidMount () {
  var map = new GMaps({
    el: '#map',
    lat: -6.260697,
    lng: 106.781391,
    click: function(e) {
      map.removeMarkers()
      map.addMarker({
        title: 'Game Event',
        icon: 'https://cdn.sstatic.net/Sites/travel/img/favicon.ico?v=b9725f5d51ee',
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        infoWindow: {
           content: `
           <div>
             <h3>Game Event</h3>
             <p>Picture Chalange</p>
             <img src='http://www.streetdirectory.co.id/stock_images/travel/show_resize_image.php?imageId=ind_13480475810166&w=405&h=275' />
             <p>Description : as;dkfja;sdlkfjasldfjsad</p>
           </div>`
           }
      });
    }
  })
}




    handleChange(date) {
        this.setState({startDate: date});
    }

    render() {
        return (


            <div className='App'>

                <h1>Game Mangement - New Game</h1>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Form>
                                <Form.Field>
                                    <label style={{float: 'left'}}>
                                      Geme Event
                                    </label>
                                    <input placeholder='Game Event'/>
                                </Form.Field>
                                <label style={{float: 'left'}}>
                                    <b style={{fontSize: 'small'}}>Game Description</b>
                                </label>
                                <Form.Field control={TextArea} placeholder='Tell us more about event'/>
                                <label style={{
                                    float: 'left'
                                }}>
                                    <b style={{
                                        fontSize: 'small'
                                    }}>Date Event</b>
                                </label>
                                <br></br>
                                <div style={{
                                    float: 'left'
                                }}>
                                    <DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <Form.Field style={{
                                    marginTop: 50
                                }}>
                                    <label style={{
                                        float: 'left'
                                    }}>Location Event</label>
                                    <input placeholder='Location Event'/>
                                </Form.Field>
                                  <div id="map" style={{width:800, height:450}}></div>

                                <Button positive>Save Game Event</Button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={6} style={{
                            backgroundColor: 'rgb(94, 189, 236)'
                        }}>
                            <p style={{
                                textAlign: 'left',
                                alignItems: 'center'

                            }}>
                                <Image src='https://4.bp.blogspot.com/-JY1beh0o02M/V3DY9yPdCMI/AAAAAAAAAMI/NQUYgOQdx5MD0_4EQr82nWburZJp14ROwCLcB/s1600/unnamed.png'/>
                                <b>Game Evet :
                                </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                            <p style={{
                                textAlign: 'left'
                            }}>
                                <b>Game Description :
                                  </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
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
