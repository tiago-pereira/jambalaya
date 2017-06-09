import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Accordion } from 'semantic-ui-react'

import { doRequestAvisos } from '../../../../ducks/usuario'

import './avisos.css'

class Avisos extends Component {

  componentDidMount() {
    this.props.doRequestAvisos()
  }

  render(){
    const { avisos } = this.props

    return (
      <div>
        <h2> Avisos </h2>
        <Accordion
          className="avisos-accordion"
          panels={avisos.map(aviso => ({title: aviso.titulo, content: aviso.descricao}))} 
          styled exclusive={false}
        />
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    isRequesting: state.usuario.isRequesting,
    avisos: state.usuario.avisos
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    doRequestAvisos
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avisos)

