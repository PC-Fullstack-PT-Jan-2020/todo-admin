import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AdminTodos from './pages/AdminTodos'
import AdminUsers from './pages/AdminUsers'
import UserTodos from './pages/UserTodos'
import Store from './Store'

export default () => <Store>
  <Router>
    <ul style={{ display: 'flex', listStyle: 'none', background: '#ddd', padding: '10px' }}>
      <li style={{ marginRight: '20px' }}><Link to="/">user todos</Link></li>
      <li style={{ marginRight: '20px' }}><Link to="/admin/todos">admin todos</Link></li>
      <li><Link to="/admin/users">admin users</Link></li>
    </ul>
    <Route path="/" exact component={UserTodos} />
    <Route path="/admin/todos" component={AdminTodos} />
    <Route path="/admin/users" component={AdminUsers} />
  </Router>
</Store>
