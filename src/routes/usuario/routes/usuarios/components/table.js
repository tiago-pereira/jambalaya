import React, { Component } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'

class TabelaUsuarios extends Component {

  render(){
    const { rows } = this.props

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Perfil</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) =>
            <Table.Row key={index}>
              <Table.Cell>{row.usuario}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>

      </Table>
    )
  }
}

export default TabelaUsuarios 
