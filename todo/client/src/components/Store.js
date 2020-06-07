import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'

export default (props) => <div>
  <Provider store={store}>
    {props.children}
  </Provider>
</div>
