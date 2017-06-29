import React, { Component } from 'react'
import Title from '../../components/title'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import TabelaUsuarios from './components/table'
import { doSaveUsuario, doRequestUsuarios, updateField } from '../../../../ducks/usuario'

const AddModal = (props) => 
  <Form>
    <Form.Group widths='equal'>
      <Form.Input value={props.usuario} label='Usuário' placeholder='Ex: joao.ferreira' onChange={(e) => props.updateField('newUsuario', 'usuario', e.target.value)}/>
      <Form.Input value={props.role} label='Perfil' placeholder='admin ou user' onChange={(e) => props.updateField('newUsuario', 'role', e.target.value)}/>
      <Form.Field>
        <label>Senha </label>
        <input onChange={e => props.updateField('newUsuario', 'senha', e.target.value)} 
          value={props.senha} type="password" placeholder='******' />
      </Form.Field>
    </Form.Group>
    <Button type="button" onClick={() => props.doSaveUsuario({
      usuario: props.usuario,
      role: props.role,
      perfil: props.perfil,
      senha: props.senha,
      notificacoes: []
    })}>Adicionar</Button>
  </Form>

class Usuarios extends Component {
  componentDidMount() {
    this.props.doRequestUsuarios()
  }

  render(){
    const { newUsuario } = this.props

    console.log(newUsuario)


    return (
      <div>
        <Title 
          showAdd={true}
          addModal={<AddModal {...newUsuario} updateField={this.props.updateField} doSaveUsuario={this.props.doSaveUsuario}/>}>
          Usuarios 
        </Title>
        <TabelaUsuarios rows={this.props.usuarios} />
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    usuarios: state.usuario.usuarios,
    newUsuario: state.usuario.newUsuario
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    doRequestUsuarios,
    doSaveUsuario,
    updateField
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Usuarios)
