import React from 'react';
import ReacDOM from 'react-dom';
import Root from 'Views/Root';
import rootReducer from 'Ducks/';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
console.log(store.getState())

ReacDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('app')
);
