import React, {Component} from 'react'
import {Grid, Icon, Card, Image, Button} from 'semantic-ui-react'
import { getAllUserEvents, updateUserCompletion } from '../../actions/index.js'
import { connect } from 'react-redux'

class VerifyEvent extends Component {
    constructor(){
      super()
      this.state={
        dataConfirmImage: []
      }
      this.getListEvent = this.getListEvent.bind(this)
      this.clearAnswerKeyImage = this.clearAnswerKeyImage.bind(this)
    }
    componentWillMount(){
      var token = localStorage.getItem('token')
      this.props.getAllUserEvents(token)
    }


    getListEvent(dataConfirmImage){
      this.setState({
        dataConfirmImage: [dataConfirmImage]
      })
    }

    clearAnswerKeyImage(){
      this.setState({
        dataConfirmImage: []
      })
    }


    render() {
      var arrDataEvents = []
      if(this.props.listUserEvents.length > 0){
        var hasil = this.props.listUserEvents.map(item=>{
            return item
        })
        arrDataEvents = hasil
      }
        return (
          <div className='InputStyle'>
              <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <h3>VERIFY IMAGE</h3>
                      <div className="gameInfo">
                        <Icon name='game' size='big' />
                          <b>LIST IMAGES</b>
                      </div>
                      <div style={{marginTop: 20}} className="gameInfo">
                        <Icon name='cancel' size='big' />
                          <b>Logout</b>
                      </div>

                    </Grid.Column>
                        <Grid.Column width={8}>
                          <div className='VerifyImage'>
                            {arrDataEvents.length !== 0 ?
                              arrDataEvents.map((DataAnswerUser, index)=>{
                                return (
                                    <div key={index} style={{width: '20%', marginRight: "2%"}}>
                                      <Card style={{marginRight:15}}>
                                            <Image src={DataAnswerUser.userAnswer}/>
                                              <div style={{marginTop: 5, marginBottom: 5}}>
                                                <Button onClick={()=>this.getListEvent(DataAnswerUser)} color="orange">Check</Button>
                                              </div>
                                      </Card>
                                    </div>
                                  )
                              })
                            : <h3>List User Answer</h3>}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Card style={{marginRight:15}}>
                                <Image src={this.state.dataConfirmImage.length !== 0 ? this.state.dataConfirmImage[0].Quest.answerKey : ""}/>
                                <Card.Content>
                                    <Card.Header>{this.state.dataConfirmImage.length !== 0 ? this.state.dataConfirmImage[0].Quest.title : ""}</Card.Header>
                                    <Card.Meta>{this.state.dataConfirmImage.length !== 0 ? this.state.dataConfirmImage[0].Quest.task : "AnswerKey"}</Card.Meta>
                                </Card.Content>
                                {this.state.dataConfirmImage.length !== 0 ? <Button onClick={()=>{
                                  this.props.updateUserCompletion(this.state.dataConfirmImage[0].id, true, localStorage.getItem('token'))
                                  this.clearAnswerKeyImage()
                                }} positive>Confirm</Button> : <div></div>}
                            </Card>
                        </Grid.Column>
                  </Grid.Row>
              </Grid>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    listUserEvents: state.listDataUserEvents
  }
}

const mapDispatchToProps = dispatch => ({
  getAllUserEvents: (token) => dispatch(getAllUserEvents(token)),
  updateUserCompletion: (id, status, token) => dispatch(updateUserCompletion(id, status, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEvent)
