import React, {Component} from 'react'
import {Grid, Icon, Card, Image, Button} from 'semantic-ui-react'
import { getAllUserEvents, updateUserCompletion } from '../../actions/index.js'
import { connect } from 'react-redux'

class VerifyEvent extends Component {
    constructor(){
      super()
      this.state={
        itemListEvent: []
      }
      this.getListEvent = this.getListEvent.bind(this)
    }
    componentWillMount(){
      this.props.getAllUserEvents()
    }

    getListEvent(itemListEvent){
      this.setState({
        itemListEvent: [itemListEvent]
      })
    }


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
                      {this.props.listUserEvents.length !==0 ?
                        this.props.listUserEvents.map((item, index)=>{
                        return (
                          <div key={index} className="listinfo">
                              <a onClick={()=>this.getListEvent(item)} href="#" >{item.Event.id}</a>
                          </div>
                          )
                        })
                        : ""
                      }
                    </Grid.Column>
                        <Grid.Column width={8}>
                          <div className='VerifyImage'>
                            {this.state.itemListEvent.length !== 0 ?
                              this.state.itemListEvent.map((DataAnswerUser, index)=>{
                                return (
                                    <div key={index} style={{width: '20%', marginRight: "2%"}}>
                                      <Card style={{marginRight:15}}>
                                            <Image src={DataAnswerUser.userAnswer}/>
                                              {/*<div style={{marginTop: 5, marginBottom: 5}}>
                                                <Button onClick={()=>this.props.updateUserCompletion(this.state.itemListEvent.id, false)} negative>Remove</Button>
                                              </div>*/}
                                              <div style={{marginTop: 5, marginBottom: 5}}>
                                                <Button onClick={()=>this.props.updateUserCompletion(DataAnswerUser.id, true)} positive>Confirm</Button>
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
                                <Image src={this.state.itemListEvent.length !== 0 ? this.state.itemListEvent[0].Quest.answerKey : ""}/>
                                <Card.Content>
                                    <Card.Header>{this.state.itemListEvent.length !== 0 ? this.state.itemListEvent[0].Quest.title : ""}</Card.Header>
                                    <Card.Meta>{this.state.itemListEvent.length !== 0 ? this.state.itemListEvent[0].Quest.task : "AnswerKey"}</Card.Meta>
                                </Card.Content>
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
  getAllUserEvents: () => dispatch(getAllUserEvents()),
  updateUserCompletion: (id, status) => dispatch(updateUserCompletion(id, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEvent)
