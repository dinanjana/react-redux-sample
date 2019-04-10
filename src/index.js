import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import leaseStore from './store/leaseStore'
import { acquireLeases } from './actions/actions';
import * as serviceWorker from './serviceWorker';

leaseStore.dispatch(acquireLeases());

ReactDOM.render(
  <Provider store={leaseStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
window.store = () => leaseStore.getState();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();