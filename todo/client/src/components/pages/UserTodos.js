import React, { useEffect } from 'react'
import { useUser } from '../../hooks'
import Modal from '../ui/Modal'
import axios from 'axios'

export default () => {
  const { user, toggleUser } = useUser()
  useEffect(() => {
    axios.get('/api')
  }, [])
  return (
    <div>
      {user.id}
      {/* <Modal>
        <div>modal here!</div>
      </Modal> */}
    </div>
  )
}