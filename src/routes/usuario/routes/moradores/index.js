import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TabelaMoradores from './components/table'
import { doSaveMorador, doRequestMoradores, updateField } from '../../../../ducks/usuario'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import { Button, Checkbox, Form } from 'semantic-ui-react'
import Title from '../../components/title'


const AddModal = (props) => 
  <Form>
    <Form.Group widths='equal'>
      <Form.Input value={props.nome} label='Nome' placeholder='Ex: João Ferreira' onChange={(e) => props.updateField('newMorador', 'nome', e.target.value)}/>
      <Form.Input value={props.cpf} label='CPF' placeholder='000.000.000-00' onChange={(e) => props.updateField('newMorador', 'cpf', e.target.value)}/>
      <Form.Input value={props.apartamento} label='Apartamento' placeholder='Ex: 02' onChange={(e) => props.updateField('newMorador', 'apartamento', e.target.value)}/>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input value={props.telefone} label='Telefone' placeholder='(00) 0000-0000' onChange={(e) => props.updateField('newMorador', 'telefone', e.target.value)}/>
      <Form.Input value={props.email} label='Email' placeholder='Ex: joao@email.com' onChange={(e) => props.updateField('newMorador', 'email', e.target.value)}/>
    </Form.Group>
    <Button type="button" onClick={() => props.doSaveMorador({
      nome: props.nome, 
      cpf: props.cpf,
      apartamento: props.apartamento,
      telefone: props.telefone,
      email: props.email
    })}>Adicionar</Button>
  </Form>

class Moradores extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.doRequestMoradores()
  }

  render(){

    const { newMorador } = this.props

    return (
      <div>
        <Title 
          showAdd={this.props.role === 'admin'}
          addModal={<AddModal {...newMorador} updateField={this.props.updateField} doSaveMorador={this.props.doSaveMorador}/>}>
          Moradores 
        </Title>
        <Form style={{marginTop: 16}}>
          <Form.Input value={this.props.search} placeholder='Buscar morador' onChange={(e) => this.props.updateField('searchMorador', 'nome', e.target.value)}/>
        </Form>
        <TabelaMoradores rows={this.props.moradores} filter={this.props.searchMorador.toUpperCase()}/>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    role: state.login.user.role,
    isRequesting: state.usuario.isRequesting,
    moradores: state.usuario.moradores,
    newMorador: state.usuario.newMorador,
    searchMorador: state.usuario.searchMorador.nome ? state.usuario.searchMorador.nome : ''
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    doRequestMoradores,
    doSaveMorador,
    updateField
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moradores)
