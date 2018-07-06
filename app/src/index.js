import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);