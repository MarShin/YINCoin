import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers'; // redux reducer defines the shape of global data store

// const middleware = [];
// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

// const store = createStore(reducer, applyMiddleware(...middleware));

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
