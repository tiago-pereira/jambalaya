import React, { Component } from 'react'
import TabelaReservas from './components/table'

class Reservas extends Component {

  render(){
    return (
      <div>
        <h2> Reservas </h2>
        <TabelaReservas />
      </div>
    )
  }
}

export default Reservas 
