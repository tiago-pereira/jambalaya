import React, { Component } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'

class TabelaMoradores extends Component {

  render(){
    const { rows } = this.props

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>CPF</Table.HeaderCell>
            <Table.HeaderCell>Telefone</Table.HeaderCell>
            <Table.HeaderCell>Apartamento</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) =>
            <Table.Row key={index}>
              <Table.Cell>{row.nome}</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>{row.telefone}</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>

      </Table>
    )
  }
}

export default TabelaMoradores
