import React, { useEffect } from 'react'
import { useUser } from '../../hooks'
import axios from 'axios'

export default () => {
  const { user, toggleUser } = useUser()
  useEffect(() => {
    axios.get('/api')
  }, [])
  return (
    <div>{user.id}</div>
  )
}