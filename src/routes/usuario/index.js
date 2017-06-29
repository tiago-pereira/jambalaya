import React, { Component } from 'react'
import { Route } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux/es'

import Header from './components/header'

import Avisos from  './routes/avisos'
import Moradores from './routes/moradores'
import Multas from './routes/multas'
import Reservas from './routes/reservas'
import Usuarios from './routes/usuarios'

import './usuario.css'

class Usuario extends Component {

  constructor(props) {
    super(props)

    this.routes = {
      AVISOS: `${props.match.url}/avisos`,
      MORADORES: `${props.match.url}/moradores`,
      MULTAS: `${props.match.url}/multas`,
      RESERVAS: `${props.match.url}/reservas`,
      USUARIOS: `${props.match.url}/usuarios`,
    }
  }

  render(){
    const { push } = this.props

    return (
      <div>
        <Header routes={this.routes} push={push} nome={this.props.usuario} role={this.props.role} notificacoes={this.props.notificacoes}>
          <div style={{padding: 16}}> 
            <Route path={this.routes.AVISOS} component={Avisos}/>
            <Route path={this.routes.MORADORES} component={Moradores}/>
            <Route path={this.routes.MULTAS} component={Multas}/>
            <Route path={this.routes.RESERVAS} component={Reservas}/>
            <Route path={this.routes.USUARIOS} component={Usuarios}/>
          </div>
        </Header>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return ({
    notificacoes: state.login.user.notificacoes,
    usuario: state.login.user.usuario,
    role: state.login.user.role
  })
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    push
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Usuario)

