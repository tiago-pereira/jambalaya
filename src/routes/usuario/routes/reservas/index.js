import React, { Component } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import TabelaReservas from './components/table'

class Reservas extends Component {

  render(){
    return (
      <div>

        <TabelaReservas />
      </div>
    )
  }
}

export default Reservas 
