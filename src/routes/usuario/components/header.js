import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import './header.css'

class UsuarioHeader extends Component {

  constructor(props){
    super(props)

    this.state = {
      visible: false,
      notificacoes: false

    }

  }

  toggleVisibility() {
    this.setState({
      ...this.state,
      visible: !this.state.visible
    })
  }

  toggleNotificacoes() {
    this.setState({
      ...this.state,
      notificacoes: !this.state.notificacoes
    })
  }

  render(){
    const { visible } = this.state
    const { children, push, routes } = this.props

    console.log(this.state.notificacoes)

    return (
      <div>
      <div>
        <div className="usuario-header" >
          <div onClick={this.toggleVisibility.bind(this)}>
            <Icon className="usuario-header-icon" size="big" name="content" />
          </div>
          <div className="usuario-header-right-container"> 
            <div onClick={this.toggleNotificacoes.bind(this)}>
              <Icon className="usuario-header-icon" size="large" name="alarm outline" />

              <div style={{
                padding: 8,
                opacity: this.state.notificacoes ? '1': '0',
                transition: '0.3s all ease-in-out',
                position: 'absolute', 
                backgroundColor: 'white', 
                zIndex: 1,
                top: 52,
                border: '1px solid black',
                borderRadius: '10px',
                width: 200,
                right: 15}}>
                <b style={{marginBottom: 8}}>Notificações:</b>

                {this.props.notificacoes.map(n => <div style={{borderBottom: '1px solid #CCCCCC'}}>{n}</div>)}

              </div>
            </div>
            <span className="usuario-header-name"> {this.props.nome} </span>
            <Icon className="usuario-header-icon" size="large" name="setting" />
          </div>
        </div>
      </div>
      <Sidebar.Pushable>
        <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Menu.Item name='idea' onClick={() => push(routes.AVISOS)}>
            <Icon name='idea' />
            Avisos 
          </Menu.Item>
          <Menu.Item name='calendar' onClick={() => push(routes.RESERVAS)}>
            <Icon name='calendar' />
            Reservas
          </Menu.Item>
          <Menu.Item name='warning sign' onClick={() => push(routes.MULTAS)}>
            <Icon name='warning sign' />
            Multas e advertências 
          </Menu.Item>
          {this.props.role === 'admin' ? <Menu.Item name='users' onClick={() => push(routes.MORADORES)}>
            <Icon name='users' />
            Moradores 
          </Menu.Item> : ''}
          {this.props.role === 'admin' ? <Menu.Item name='' onClick={() => push(routes.USUARIOS)}>
            <Icon name='id card outline' />
            Usuários
          </Menu.Item> : ''}
        </Sidebar>
        <Sidebar.Pusher>
          <div style={{minHeight: 'calc(100vh - 45px)'}}>
            { children } 
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
    )
  }
}

export default UsuarioHeader 
