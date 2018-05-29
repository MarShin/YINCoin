// @flow
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// official doc not working
// import RNFirebase from 'react-native-firebase';
import ReactNativeFirebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';

import rootReducer from '../reducers';

const initialState = {};

const reactNativeFirebaseConfig = {
  debug: true
};

const reduxFirebaseConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(ReactNativeFirebase.app(), reduxFirebaseConfig), // pass initialized react-native-firebase app instance
    // applyMiddleware can be placed here
    applyMiddleware(
      thunkMiddleware.withExtraArgument(getFirebase),
      createLogger()
    )
  )
);

export default store;
