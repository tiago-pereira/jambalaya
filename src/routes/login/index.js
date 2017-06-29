import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux/es'
import { Button, Checkbox, Form } from 'semantic-ui-react'


import { updatedPassword, updatedLogin, doLogin } from '../../ducks/login'

const LoginForm = (props) => 
  <Form>
    <Form.Field>
      <label> Usuário</label>
      <input onChange={e => props.updatedLogin(e.target.value)} value={props.usuarip} placeholder='Ex: tiago.silva' />
    </Form.Field>
    <Form.Field>
      <label>Senha </label>
      <input onChange={e => props.updatedPassword(e.target.value)} 
        value={props.senha} type="password" placeholder='******' />
    </Form.Field>
    <Button type="button" 
      onClick={() => {
        props.doLogin(props.usuario, props.senha)
      }}>Entrar</Button>
  </Form>

class LoginRoute extends Component {
  render() {
    return (
      <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1> Jambalaya </h1>
        <div style={{backgroundColor: 'white', padding: 16, left: 'calc(50%)'}}>
          <LoginForm 
            doLogin={this.props.doLogin}
            updatedPassword={this.props.updatedPassword}
            updatedLogin={this.props.updatedLogin}
            push={this.props.push} usuario={this.props.usuario} senha={this.props.senha}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    usuario: state.login.usuario,
    senha: state.login.senha
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    push,
    doLogin,
    updatedLogin,
    updatedPassword
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRoute)
