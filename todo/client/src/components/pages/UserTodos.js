import React from 'react'
import { useUser } from '../../hooks'

export default () => {
  const { user, toggleUser } = useUser()
  return (
    <div>{user.id}</div>
  )
}