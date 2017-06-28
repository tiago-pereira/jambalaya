import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux/es'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const LoginForm = (props) => 
  <Form>
    <Form.Field>
      <label> Usuário</label>
      <input placeholder='Ex: tiago.silva' />
    </Form.Field>
    <Form.Field>
      <label>Senha </label>
      <input type="password" placeholder='******' />
    </Form.Field>
    <Button type="button" onClick={() => props.push('/usuario/avisos')}>Entrar</Button>
  </Form>

class LoginRoute extends Component {
  render() {
    return (
      <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{backgroundColor: 'white', padding: 16, left: 'calc(50%)'}}>
          <LoginForm push={this.props.push}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    push
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRoute)
