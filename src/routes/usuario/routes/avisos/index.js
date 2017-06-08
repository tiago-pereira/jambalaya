import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Accordion } from 'semantic-ui-react'


import './avisos.css'

class Avisos extends Component {

  constructor(props){
    super(props)

    this.panels = [
      {title: 'titulo 1', content: 'conteudo 1'},
      {title: 'titulo 2', content: 'conteudo 2'},
      {title: 'titulo 3', content: 'conteudo 3'},
    ]
  }

  render(){
    return (
      <div>
        <h2> Avisos </h2>
        <Accordion
          className="avisos-accordion"
          panels={this.panels} 
          styled exclusive={false}
        />
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avisos)

