import React, { Component } from 'react'
import TabelaReservas from './components/table'
import Title from '../../components/title'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import { doSaveReserva, doRequestReservas, updateField } from '../../../../ducks/usuario'

const AddModal = (props) => 
  <Form>
    <Form.Group widths='equal'>
      <Form.Input value={props.morador} label='Morador' placeholder='Ex: João Ferreira' onChange={(e) => props.updateField('newReserva', 'morador', e.target.value)}/>
      <Form.Input value={props.apartamento} label='Apartamento' placeholder='Ex: 02' onChange={(e) => props.updateField('newReserva', 'apartamento', e.target.value)}/>
      <Form.Input value={props.salao} label='Salão' placeholder='Ex: Churrasqueira A' onChange={(e) => props.updateField('newReserva', 'salao', e.target.value)}/>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input value={props.dia} label='Dia' placeholder='Ex: 09/02/2017' onChange={(e) => props.updateField('newReserva', 'dia', e.target.value)}/>
      <Form.Input value={props.inicio} label='Início' placeholder='Ex: 13:00' onChange={(e) => props.updateField('newReserva', 'inicio', e.target.value)}/>
      <Form.Input value={props.fim} label='Fim' placeholder='Ex: 18:00' onChange={(e) => props.updateField('newReserva', 'fim', e.target.value)}/>
    </Form.Group>
    <Button type="button" onClick={() => props.doSaveReserva({
      morador: props.morador,
      apartamento: props.apartamento,
      dia: props.dia,
      inicio: props.inicio,
      fim: props.fim,
      salao: props.salao
    })}>Adicionar</Button>
  </Form>

class Reservas extends Component {

  componentDidMount() {
    this.props.doRequestReservas()
  }

  render(){
    const { newReserva } = this.props

    console.log(newReserva)

    return (
      <div>
        <Title 
          showAdd={true}
          addModal={<AddModal {...newReserva} updateField={this.props.updateField} doSaveReserva={this.props.doSaveReserva}/>}>
          Reservas 
        </Title>

        <TabelaReservas rows={this.props.reservas}/>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({
    isRequesting: state.usuario.isRequesting,
    reservas: state.usuario.reservas,
    newReserva: state.usuario.newReserva
  })

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    doRequestReservas,
    doSaveReserva,
    updateField
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservas)

