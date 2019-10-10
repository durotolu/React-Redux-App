import React from 'react';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import * as reducers from './state/reducers';

const monsterReducer = combineReducers({
  jokes: reducers.jokeReducer,
})

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

function App() {
  return (
    <Provider store={store} >
      <div className="App">

      </div>
    </Provider>
  );
}

export default App;
