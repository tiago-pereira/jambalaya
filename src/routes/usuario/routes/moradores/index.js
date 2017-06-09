import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TabelaMoradores from './components/table'
import { doRequestMoradores } from '../../../../ducks/usuario'

class Moradores extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.doRequestMoradores()
  }

  render(){
    return (
      <div>
        <h2> Moradores </h2>
        <TabelaMoradores rows={this.props.moradores}/>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    isRequesting: state.usuario.isRequesting,
    moradores: state.usuario.moradores
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    doRequestMoradores
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moradores)
