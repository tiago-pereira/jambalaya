import React, { Component } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'

class TabelaReservas extends Component {

  render(){
    const { rows } = this.props

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Morador</Table.HeaderCell>
            <Table.HeaderCell>Nr. Apartamento</Table.HeaderCell>
            <Table.HeaderCell>Salão</Table.HeaderCell>
            <Table.HeaderCell>Dia</Table.HeaderCell>
            <Table.HeaderCell>Início</Table.HeaderCell>
            <Table.HeaderCell>Fim</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) =>
            <Table.Row key={index}>
              <Table.Cell>{row.morador}</Table.Cell>
              <Table.Cell>{row.apartamento}</Table.Cell>
              <Table.Cell>{row.salao}</Table.Cell>
              <Table.Cell>{row.dia}</Table.Cell>
              <Table.Cell>{row.inicio}</Table.Cell>
              <Table.Cell>{row.fim}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    )
  }
}

export default TabelaReservas 
