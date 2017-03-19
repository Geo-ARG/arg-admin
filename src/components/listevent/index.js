import React, { Component } from 'react'
import { Table} from 'semantic-ui-react'
import { connect } from 'react-redux'
import getAllDataEvents from '../../actions'


class ListEvent extends Component {
  componentDidMount(){
    this.props.getAllDataEvents()
  }

  render () {
    console.log("testt");
    console.log(this.props.listDataEvents);
    return (
      <div className='App'>

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

                 </Table.Body>
             </Table>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listDataEvents: state.listDataEvents
  }
}

const mapDispatchToProps = dispatch => ({
  getAllDataEvents: () => dispatch(getAllDataEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListEvent)
