import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import './header.css'

class UsuarioHeader extends Component {

  constructor(props){
    super(props)

    this.state = {
      visible: false
    }

  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render(){
    const { visible } = this.state
    const { children, push, routes } = this.props

    return (
      <div>
      <div>
        <div className="usuario-header" >
          <div onClick={this.toggleVisibility.bind(this)}>
            <Icon className="usuario-header-icon" size="big" name="content" />
          </div>
          <div className="usuario-header-right-container"> 
            <Icon className="usuario-header-icon" size="large" name="alarm outline" />
            <span className="usuario-header-name"> Nome do usuário </span>
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
          <Menu.Item name='users' onClick={() => push(routes.MORADORES)}>
            <Icon name='users' />
            Moradores 
          </Menu.Item>
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
