import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import leaseStore from './store/leaseStore'
import { acquireLeases } from './actions/actions';

leaseStore.dispatch(acquireLeases());

ReactDOM.render(
  <Provider store={leaseStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window.store = () => leaseStore.getState()
