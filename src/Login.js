import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class LoginRoute extends Component {
  render() {
    return (
      <div>
        <input />
        <input />

        <button> botao </button>
      </div>)
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
)(LoginRoute)
