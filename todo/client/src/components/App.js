import React, { useEffect } from 'react';
import Store from './Store'
import Routes from './Routes'

export default () => {
  return (
    <Store>
      <Routes></Routes>
    </Store>
  )
}
