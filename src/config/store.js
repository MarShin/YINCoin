// @flow
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import firebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';

import rootReducer from '../reducers';

const initialState = {};

const reduxFirebaseConfig = {
  userProfile: 'users',
  enableRedirectHandling: false
  // useFirestoreForProfile: true
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase.app(), reduxFirebaseConfig),
    applyMiddleware(
      thunkMiddleware.withExtraArgument(getFirebase),
      createLogger()
    )
  )
);

export default store;
