import React, { Component } from 'react'
import TabelaReservas from './components/table'
import Title from '../../components/title'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const AddModal = (props) => 
  <Form>
    <Form.Field>
      <label> Usuário</label>
      <input placeholder='Ex: tiago.silva' />
    </Form.Field>
    <Form.Field>
      <label>Senha </label>
      <input type="password" placeholder='******' />
    </Form.Field>
    <Button type="button" onClick={() => props.push('/usuario')}>Reservar</Button>
  </Form>

class Reservas extends Component {

  render(){
    return (
      <div>
        <Title addModal={<AddModal/>}>
          Reservas
        </Title>
        <TabelaReservas />
      </div>
    )
  }
}

export default Reservas 
