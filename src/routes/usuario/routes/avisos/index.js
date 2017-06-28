import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Accordion } from 'semantic-ui-react'

import { Button, Checkbox, Form } from 'semantic-ui-react'
import { doRequestAvisos } from '../../../../ducks/usuario'
import Title from '../../components/title'

import './avisos.css'


const AddModal = (props) => 
  <Form>
    <Form.Input label='Título' placeholder='' />
    <Form.TextArea label='Descrição' placeholder='' />
    <Button type="button" onClick={() => props.push('/usuario')}>Adicionar</Button>
  </Form>

class Avisos extends Component {

  componentDidMount() {
    this.props.doRequestAvisos()
  }

  render(){
    const { avisos } = this.props

    return (
      <div>
        <Title addModal={<AddModal/>}>
          Avisos
        </Title>
        <div style={{marginTop: 16}}>
          <Accordion
            className="avisos-accordion"
            panels={avisos.map(aviso => ({title: aviso.titulo, content: aviso.descricao}))} 
            styled exclusive={false}
          />
        </div>
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

