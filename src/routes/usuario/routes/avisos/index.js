import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Accordion } from 'semantic-ui-react'

import { Button, Checkbox, Form } from 'semantic-ui-react'
import { doSaveAviso, doRequestAvisos, updateField } from '../../../../ducks/usuario'
import Title from '../../components/title'

import './avisos.css'


const AddModal = (props) => 
  <Form>
    <Form.Input value={props.titulo} label='Título' placeholder='' onChange={(e) => props.updateField('newAviso', 'titulo', e.target.value)}/>
    <Form.TextArea value={props.descricao} label='Descrição' placeholder='' onChange={(e) => props.updateField('newAviso', 'descricao', e.target.value)}/>
    <Button type="button" onClick={() => props.doSaveAviso({titulo: props.titulo, descricao: props.descricao})}>Adicionar</Button>
  </Form>

class Avisos extends Component {

  componentDidMount() {
    this.props.doRequestAvisos()
  }

  render(){
    const { avisos, newAviso } = this.props

    console.log(this.props.role)

    return (
      <div>
        <Title 
          showAdd={this.props.role === 'admin'}
          closeModal={this.props.closeAddModal}
          addModal={<AddModal {...newAviso} updateField={this.props.updateField} doSaveAviso={this.props.doSaveAviso}/>}>
          Avisos
        </Title>
        <div style={{marginTop: 16}}>
          <Accordion
            className="avisos-accordion"
            panels={avisos.sort((a, b) => b.id - a.id).map(aviso => ({title: aviso.titulo, content: aviso.descricao}))} 
            styled exclusive={false}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    role: state.login.user.role,
    isRequesting: state.usuario.isRequesting,
    avisos: state.usuario.avisos,
    newAviso: {...state.usuario.newAviso}
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    doRequestAvisos,
    updateField,
    doSaveAviso
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avisos)

