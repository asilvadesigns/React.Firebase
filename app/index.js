import React from 'react';
import ReacDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from 'Views/Root';

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state+action.payload;
  }
  return state;
  console.log("state:", state);
  console.log("action:", action);
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState())
})

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});

ReacDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('app')
);
