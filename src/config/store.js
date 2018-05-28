import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import ReactNativeFirebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';

import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
