import React, { Component } from 'react'
import { Table} from 'semantic-ui-react'

export default class ListEvent extends Component {

  render () {
    return (
      <div className='App'>

          <div className='center showlisttodos'>
            <Table singleLine>
              <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No</Table.HeaderCell>
                    <Table.HeaderCell>Game Event</Table.HeaderCell>
                    <Table.HeaderCell>Date Event</Table.HeaderCell>
                    <Table.HeaderCell>Location Event</Table.HeaderCell>
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
