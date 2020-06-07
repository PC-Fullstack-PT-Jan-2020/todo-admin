import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import Modal from '../ui/Modal'

export default () => {
  const [modalVisible, setModalVisibility] = useState(false)
  function showModal() {
    setModalVisibility(true)
  }
  return (
    <div className="app-container">
      {
        modalVisible &&
        <Modal dismiss={() => setModalVisibility(false)}>
          <div>form to create user...</div>
        </Modal>
      }
      <div className="d-flex justify-content-between">
        <h2>admin users start</h2>
        <Button icon onClick={showModal}>
          <Icon name='plus' />
        </Button>
      </div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>user 1</Table.Cell>
            <Table.Cell textAlign='right'>
              <Button icon>
                <Icon name='trash' />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}