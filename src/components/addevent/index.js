import React, {Component} from 'react'
import '../../App.css'
import {Grid, Image, Form, Button, TextArea, Icon} from 'semantic-ui-react'
const DatePicker = require('react-datepicker');
const moment = require('moment');
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import GMaps from '../../../public/gmaps.min.js'
import { addEvent } from '../../actions/index.js'
import ReactFilestack from 'react-filestack'
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
          completion: false,
          locationTask_title: '',
          locationTask_task: '',
          locationTask_answerKey: '',
          challengeTask_title: '',
          challengeTask_task: '',
          challengeTask_answerKey: '',
          cameraTask_title: '',
          cameraTask_task: '',
          cameraTask_answerKey: ''
      }
    }
    //======= Game Event handleChange============
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
        var that = this
        GMaps.geocode({
          address: that.state.place,
          callback: function(results, status) {
            if (status === 'OK')
              that.setState({
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              })
            }
          })

          setTimeout(()=>{
            var map = new GMaps({
              div: '#map',
              zoom: 14,
              lat: that.state.lat || 0,
              lng: that.state.lng || 0,
            })
            map.addMarker({
              title: 'Game Event',
              icon: 'https://cdn.sstatic.net/Sites/travel/img/favicon.ico?v=b9725f5d51ee',
              lat: that.state.lat || 0,
              lng: that.state.lng || 0,
              infoWindow: {
                 content: `
                 <div>
                   <h3>${that.state.title}</h3>
                   <p>${that.state.description}</p>
                   <p>${that.state.place}</p>
                   <p>${that.state.eventScore}</p>
                 </div>`
                 }
            });
          }, 1000);

    }
    onHandleChangeEventScore(e){
        e.preventDefault()
        this.setState({
          eventScore: e.target.value
        })
    }
    //======= End ============

  //======= LocationTask============
    titleLocationTask(e){
        e.preventDefault()
        this.setState({
          locationTask_title: e.target.value
        })
    }

    taskLocationTask(e){
        e.preventDefault()
        this.setState({
          locationTask_task: e.target.value
        })
    }
    answerKeyLocationTask(e){
        e.preventDefault()
        this.setState({
          locationTask_answerKey: e.target.value
        })
    }
  //======= End ============

  //======= challengeTask============
    titlechallengeTask(e){
        e.preventDefault()
        this.setState({
          challengeTask_title: e.target.value
        })
    }
    taskchallengeTask(e){
        e.preventDefault()
        this.setState({
          challengeTask_task: e.target.value
        })
    }
    answerKeychallengeTask(e){
        e.preventDefault()
        this.setState({
          challengeTask_answerKey: e.target.value
        })
    }
  //======= End ============


  //======= cameraTask============
    titlecameraTask(e){
        e.preventDefault()
        this.setState({
          cameraTask_title: e.target.value
        })
    }
    taskcameraTask(e){
        e.preventDefault()
        this.setState({
          cameraTask_task: e.target.value
        })
    }

    cameraTask_answerKey(e){
      e.preventDefault()
      this.setState({
        cameraTask_answerKey: e.target.value
      })
    }
  //======= End ============

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
            lat: that.state.lat,
            lng: that.state.lng,
            infoWindow: {
               content: `
               <div>
                 <h3>${that.state.title}</h3>
                 <p>${that.state.description}</p>
                 <p>${that.state.place}</p>
                 <p>${that.state.eventScore}</p>
               </div>`
               }
          });
        }
      })



      var mapTask = new GMaps({
        el: '#mapTask',
        lat: -6.260697,
        lng: 106.781391,
        click: function(e) {
          mapTask.removeMarkers()
          that.setState({
            locationTask_answerKey: `${e.latLng.lat()}, ${e.latLng.lng()}`
          })
          mapTask.addMarker({
            title: 'Location Task',
            icon: 'https://cdn.sstatic.net/Sites/travel/img/favicon.ico?v=b9725f5d51ee',
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            infoWindow: {
               content: `
               <div>
                 <h3>${that.state.locationTask_title}</h3>
                 <p>${that.state.locationTask_task}</p>
               </div>`
               }
          });
        }
      })
    }

    handleChange(date) {
        this.setState({startDate: date});
    }

    handleSaveEvents(e){
      e.preventDefault()
      if(this.state.title.trim()==="" || this.state.description.trim()==="" || this.state.startDate==="" || this.state.place.trim()==="" || this.state.eventScore.trim()==="" || this.state.lat==="" || this.state.lng==="" || this.state.locationTask_title.trim()==="" || this.state.locationTask_task.trim()==="" || this.state.locationTask_answerKey.trim()==="" || this.state.challengeTask_title.trim()==="" || this.state.challengeTask_task.trim()==="" || this.state.challengeTask_answerKey.trim()==="" || this.state.cameraTask_title.trim()==="" || this.state.cameraTask_task.trim()==="" || this.state.cameraTask_answerKey===""){
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
          completion: false,
          locationTask_title: '',
          locationTask_task: '',
          locationTask_answerKey: '',
          challengeTask_title: '',
          challengeTask_task: '',
          challengeTask_answerKey: '',
          cameraTask_title: '',
          cameraTask_task: '',
          cameraTask_answerKey: ''
        })
      }
    }

    render() {
      const apikey = 'AyJh7Qc5RPisfAmqnfBmAz';
        const onSuccess = (result) => {
          console.log(result);
          this.setState({
              cameraTask_answerKey: result.filesUploaded[0].url
          })
      }
      const onError = (error) => {
          console.error(error);
      }

        return (
            <div className='InputStyle'>
                <h1>ARG - Game Management - New Game</h1>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <Image src='https://4.bp.blogspot.com/-JY1beh0o02M/V3DY9yPdCMI/AAAAAAAAAMI/NQUYgOQdx5MD0_4EQr82nWburZJp14ROwCLcB/s1600/unnamed.png'/>
                </div>
                <Grid celled>
                    <Grid.Row>
                      <Grid.Column width={3}>
                        <h3>SETUP</h3>
                        <div className="gameInfo">
                          <Icon name='game' size='big' />
                            <b>GAME INFO</b>
                        </div>
                        <div style={{marginTop: 20}} className="gameInfo">
                          <Icon name='cancel' size='big' />
                            <b>Logout</b>
                        </div>
                      </Grid.Column>
                        <Grid.Column width={8}>
                            <Form>
                                <Form.Field>
                                    <label style={{float: 'left'}}>Geme Title</label>
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
                                <Form.Field >
                                    <label style={{float: 'left', marginTop:15}}>Event Score</label>
                                    <input placeholder='EventScore' onChange={this.onHandleChangeEventScore.bind(this)} value={this.state.eventScore}/>
                                </Form.Field>
                                <Form.Field >
                                  <label style={{float: 'left'}}>Location on Maps</label><br></br>
                                  <div id="map" style={{marginTop:15, width:'auto', height:700}}></div>
                                </Form.Field>

                            </Form>
                        </Grid.Column>
                          <Grid.Column width={5}>
                              <h4>1. Location Task</h4>
                            <Form>
                                <Form.Field>
                                    <label style={{float: 'left'}}>Title Quest</label>
                                    <input placeholder='Title Quest' onChange={this.titleLocationTask.bind(this)} value={this.state.locationTask_title}/>
                                </Form.Field>
                                <label style={{float: 'left'}}><b style={{fontSize: 'small'}}>Task</b></label>
                                <Form.Field control={TextArea} onChange={this.taskLocationTask.bind(this)} value={this.state.locationTask_task}rows='3' placeholder='Task of Game'/>
                                <Form.Field>
                                    <label style={{float: 'left'}}>Answer Key</label><br></br>
                                    <div id="mapTask" style={{marginTop:15, width:'auto', height:300}}></div>
                                </Form.Field>
                            </Form>
                            <hr></hr>
                            <h4>2. Challenge Task</h4>
                          <Form>
                              <Form.Field>
                                  <label style={{float: 'left'}}>Title Quest</label>
                                  <input placeholder='Title Quest' onChange={this.titlechallengeTask.bind(this)} value={this.state.challengeTask_title}/>
                              </Form.Field>
                              <label style={{float: 'left'}}><b style={{fontSize: 'small'}}>Task</b></label>
                              <Form.Field control={TextArea} onChange={this.taskchallengeTask.bind(this)} value={this.state.challengeTask_task} rows='3' placeholder='Task of Game'/>
                              <Form.Field>
                                  <label style={{float: 'left'}}>Answer Key</label>
                                  <input placeholder='Answer Key' onChange={this.answerKeychallengeTask.bind(this)} value={this.state.challengeTask_answerKey} />
                              </Form.Field>
                          </Form>
                          <hr></hr>
                          <h4>3. Camera Task</h4>
                        <Form>
                            <Form.Field>
                                <label style={{float: 'left'}}>Title Quest</label>
                                <input placeholder='Title Quest' onChange={this.titlecameraTask.bind(this)} value={this.state.cameraTask_title}/>
                            </Form.Field>


                          <label style={{float: 'left'}}><b style={{fontSize: 'small'}}>Task</b></label>
                            <Form.Field control={TextArea} rows='3' onChange={this.taskcameraTask.bind(this)} value={this.state.cameraTask_task} placeholder='Task of Game'/>
                                {/*   <div>Pick Image MasterKey Challenge</div>
                                  <ReactFilestack apikey={apikey} buttonText="Upload Image" onSuccess={onSuccess} onError={onError}
                            />*/}

                            <Form.Field >
                                <label style={{float: 'left', marginTop:15}}>ImageURL</label>
                                <input placeholder='Place' onChange={this.cameraTask_answerKey.bind(this)} value={this.state.cameraTask_answerKey}/>
                            </Form.Field>
                        </Form>




                        <hr></hr>
                          <div>
                            <Button positive style={{marginTop:50, marginBottom:15}} onClick={this.handleSaveEvents.bind(this)} href="#">Save Game Event</Button>
                          </div>
                      </Grid.Column>
                    </Grid.Row>

                </Grid>

            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addEvent}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddEvents)
