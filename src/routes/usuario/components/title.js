import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AddModal= (props) => (
  <Modal trigger={<Icon style={iconStyle} className="" size="large" name="plus" />}>
    <Modal.Header>Adicionar {props.title}</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        {props.modalContent}
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

const iconStyle = {
  cursor: 'pointer'
}

const Title = (props) =>
  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <div style={{fontSize: 24, marginRight: 16}}> {props.children} </div>
    <AddModal title={props.children} modalContent={props.addModal}/>
  </div>

export default Title
