import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TabelaMoradores from './components/table'
import { doRequestMoradores } from '../../../../ducks/usuario'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import { Button, Checkbox, Form } from 'semantic-ui-react'
import Title from '../../components/title'


const AddModal = (props) => 
  <Form>
    <Form.Group widths='equal'>
      <Form.Input label='Nome' placeholder='Ex: João Ferreira' />
      <Form.Input label='CPF' placeholder='000.000.000-00' />
      <Form.Input label='Apartamento' placeholder='Ex: 02' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input label='Telefone' placeholder='(00) 0000-0000' />
      <Form.Input label='Email' placeholder='Ex: joao@email.com' />
    </Form.Group>
    <Button type="button" onClick={() => props.push('/usuario')}>Adicionar</Button>
  </Form>

class Moradores extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.doRequestMoradores()
  }

  render(){
    return (
      <div>
        <Title addModal={<AddModal/>}>
          Moradores 
        </Title>
        <TabelaMoradores rows={this.props.moradores}/>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    isRequesting: state.usuario.isRequesting,
    moradores: state.usuario.moradores
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    doRequestMoradores
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moradores)
