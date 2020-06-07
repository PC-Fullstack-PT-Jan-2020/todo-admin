import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AdminTodos from './pages/AdminTodos'
import AdminUsers from './pages/AdminUsers'
import UserTodos from './pages/UserTodos'
import Store from './Store'
import { useUser } from '../hooks'

export default () => {
  const { user } = useUser()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios.post('/api/fake-login', { id: user.id }).then(() => setLoaded(true))
  }, [])
  if (loaded) {
    return (
      <Router>
        <ul style={{ display: 'flex', listStyle: 'none', background: '#ddd', padding: '10px' }}>
          <li style={{ marginRight: '20px' }}><Link to="/">user todos</Link></li>
          {user.admin && <li style={{ marginRight: '20px' }}><Link to="/admin/todos">admin todos</Link></li>}
          {user.admin && <li><Link to="/admin/users">admin users</Link></li>}
        </ul>
        <Route path="/" exact component={UserTodos} />
        {user.admin && <Route path="/admin/todos" component={AdminTodos} />}
        {user.admin && <Route path="/admin/users" component={AdminUsers} />}
      </Router>
    )
  }
  return <div>Loading...</div>

}
