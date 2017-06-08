import React, { Component } from 'react'

import TabelaMoradores from './components/table'

class Moradores extends Component {

  render(){
    return (
      <div>
        <h2> Moradores </h2>
        <TabelaMoradores />
      </div>
    )
  }
}

export default Moradores 
