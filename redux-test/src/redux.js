import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'

const tiger = 10000

const increase = {
  type: '涨工资'
}

const decrease = {
  type: '扣工资'
}

const reducer = (state = tiger, action) => {
  switch (action.type) {
    case '涨工资':
      return state +=100000;
    case '扣工资':
      return state -= 100;
    default:
      return state;
  }
}

const store = createStore(reducer);

// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(increase);


ReactDOM.render(<App />, document.getElementById('root'));


