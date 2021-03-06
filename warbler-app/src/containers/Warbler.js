import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import LocalStore from '../util/LocalStore';
import reducers from '../reducers';
import { loginUser } from '../actions/user';
import App from './App';

const middleware = [ thunk ];

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

let userInfo = LocalStore.getUserInfo();
if (userInfo) {
  store.dispatch(loginUser(userInfo));
}

let basePath = '/';
if (process.env.NODE_ENV === 'production') {
  basePath = '/warbler';
}

const Warbler = () => (
  <Provider store={store}>
    <Router basename={basePath}>
      <App />
    </Router>
  </Provider>
);

export default Warbler;
