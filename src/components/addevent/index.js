import React, {Component} from 'react'
import '../../App.css'
import {Grid, Image, Form, Button, TextArea, Card} from 'semantic-ui-react'
const DatePicker = require('react-datepicker');
const moment = require('moment');
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import GMaps from '../../../public/gmaps.min.js'
import { addEvent } from '../../actions/index.js'
// import filepicker from '../../../public/filestack.js'
// import filepicker from '../../../node_modules/filestack-js/dist/filestack.js'
const filepicker = require('filestack-js')
import '../../App.css'
require('react-datepicker/dist/react-datepicker.css');

class AddEvents extends Component {
    constructor(){
        super()
        this.state = {
          title: '',
          description: '',
          startDate: '',
          place: '',
          eventScore: '',
          lat: '',
          lng: '',
          completion: false
      }
    }

    onHandleChangeTitle(e){
        e.preventDefault()
        this.setState({
          title: e.target.value
        })
    }
    onHandleChangeDescription(e){
        e.preventDefault()
        this.setState({
          description: e.target.value
        })
    }
    onHandleChangePlace(e){
        e.preventDefault()
        this.setState({
          place: e.target.value
        })
    }
    onHandleChangeEventScore(e){
        e.preventDefault()
        this.setState({
          eventScore: e.target.value
        })
    }

    componentDidMount (e) {
      var that = this
      var map = new GMaps({
        el: '#map',
        lat: -6.260697,
        lng: 106.781391,
        click: function(e) {
          map.removeMarkers()
          that.setState({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          })
          map.addMarker({
            title: 'Game Event',
            icon: 'https://cdn.sstatic.net/Sites/travel/img/favicon.ico?v=b9725f5d51ee',
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            infoWindow: {
               content: `
               <div>
                 <h3>${that.state.title}</h3>
                 <p>Picture Chalange</p>
                 <img src='https://cdn1.iconfinder.com/data/icons/games-colored/512/pokemon_location_2-256.png' />
                 <p>Description : ${that.state.description}</p>
                 <p>Description : ${that.state.place}</p>
                 <p>Description : ${that.state.eventScore}</p>
               </div>`
               }
          });
        }
      })
    }

    uploadImage(event){
      event.preventDefault()
      filepicker.setKey("AyJh7Qc5RPisfAmqnfBmAz");
            filepicker.pick({
                mimetype: 'image/*',
                container: 'window',
                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
            },
            function(Blob) {
            //  document.getElementById("linkUrlImages").innerHTML = Blob.filename
              console.log(Blob.url)
            //{"url":"https://cdn.filestackcontent.com/31wQVyJ2REaSzZv9SkJu","filename":"images.jpg","mimetype":"image/jpeg","size":9493,"id":1,"client":"computer","isWriteable":true}
            },
            function(FPError) {
              console.log(FPError.toString());
            });
    }

    handleChange(date) {
        this.setState({startDate: date});
    }

    handleSaveEvents(e){
      e.preventDefault()
      if(this.state.title.trim()==="" || this.state.description.trim()==="" || this.state.place.trim()==="" || this.state.eventScore.trim()==="" || this.state.lat==="" || this.state.lng===""){
        alert("Input All Field")
      }else{
        this.props.addEvent(this.state)
        this.setState({
          title: '',
          description: '',
          startDate: moment(),
          place: '',
          eventScore: '',
          lat: '',
          lng: '',
          completion: false
        })
      }
    }

    render() {
        return (
            <div className='App'>
                <h1>Game Mangement - New Game</h1>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <Image src='https://4.bp.blogspot.com/-JY1beh0o02M/V3DY9yPdCMI/AAAAAAAAAMI/NQUYgOQdx5MD0_4EQr82nWburZJp14ROwCLcB/s1600/unnamed.png'/>
                </div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Form>
                                <Form.Field>
                                    <label style={{float: 'left'}}>Geme Event</label>
                                    <input placeholder='Game Event' onChange={this.onHandleChangeTitle.bind(this)} value={this.state.title}/>
                                </Form.Field>

                                <label style={{float: 'left'}}><b style={{fontSize: 'small'}}>Game Description</b></label>
                                <Form.Field control={TextArea} onChange={this.onHandleChangeDescription.bind(this)} value={this.state.description} placeholder='Tell us more about event'/>

                                <label style={{float: 'left'}}><b style={{fontSize: 'small'}}>Date Event</b></label>
                                <br></br>
                                <div style={{float: 'left'}}>
                                    <DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)} />
                                </div>

                                <Form.Field >
                                    <label style={{float: 'left', marginTop:15}}>Place</label>
                                    <input placeholder='Place' onChange={this.onHandleChangePlace.bind(this)} value={this.state.place}/>
                                </Form.Field>
                                {/*<Card style={{marginRight:15}}>
                                    <Image src='http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
                                    <Card.Content extra>
                                        <Button.Group>
                                            <Button color='orange' onClick={this.uploadImage.bind(this)}>Upload Image</Button>
                                        </Button.Group>
                                    </Card.Content>
                                </Card>*/}
                                <Form.Field >
                                    <label style={{float: 'left', marginTop:15}}>Event Score</label>
                                    <input placeholder='EventScore' onChange={this.onHandleChangeEventScore.bind(this)} value={this.state.eventScore}/>
                                </Form.Field>
                                <Form.Field >
                                  <label style={{float: 'left'}}>Location on Maps</label><br></br>
                                  <div id="map" style={{marginTop:15, width:'auto', height:450}}></div>
                                </Form.Field>
                                <Button positive style={{marginTop:15}} onClick={this.handleSaveEvents.bind(this)} href="#">Save Game Event</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}


// const mapDispatchToProps = (dispatch) => {
//     addEvent: (addNewEvent) => dispatch(addEvent(addNewEvent))
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addEvent}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddEvents)
