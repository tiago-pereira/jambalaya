
import React, { Component } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class TabelaMoradores extends Component {

  render(){
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
          <Table.Row>
            <Table.Cell>First</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='5'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='left chevron' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='right chevron' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default TabelaMoradores
