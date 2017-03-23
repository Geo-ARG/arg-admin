import React, { Component } from 'react'
import { Table, Icon} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getAllDataEvents, deleteEvent } from '../../actions/index.js'


class ListEvent extends Component {
  componentWillMount(){
    var token = localStorage.getItem('token')
    this.props.getAllDataEvents(token)
  }


  render () {
    return (
      <div className='listStyle'>
        <div className='center showlisttodos'>
            <Table singleLine>
              <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No</Table.HeaderCell>
                    <Table.HeaderCell>Game Event</Table.HeaderCell>
                    <Table.HeaderCell>Date Event</Table.HeaderCell>
                    <Table.HeaderCell>Place Event</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  {this.props.listDataEvents.map((item, index) => {
                     return (
                    <Table.Row key={item.id}>
                       <Table.Cell>{index+1}</Table.Cell>
                       <Table.Cell>{item.title}</Table.Cell>
                       <Table.Cell>{item.date.toString().slice(0,10)}</Table.Cell >
                       <Table.Cell>{item.place}</Table.Cell >
                       <Table.Cell>
                           <a onClick={()=>this.props.deleteEvent(item.id, localStorage.getItem('token'))}  href="#"><Icon name='delete' /></a>
                        </Table.Cell>
                    </Table.Row>)
                  })}
              </Table.Body>
             </Table>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listDataEvents: state.listDataEvents.reverse()
  }
}

const mapDispatchToProps = dispatch => ({
  getAllDataEvents: (token) => dispatch(getAllDataEvents(token)),
  deleteEvent: (id, token) => dispatch(deleteEvent(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListEvent)
