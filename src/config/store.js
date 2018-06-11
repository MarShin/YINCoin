// @flow
import { compose, createStore, applyMiddleware } from 'redux';
import firebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const initialState = {};

const reduxFirebaseConfig = {
  userProfile: 'users',
  enableLogging: true,
  enableRedirectHandling: false, // http://react-redux-firebase.com/docs/integrations/react-native.html
  useFirestoreForProfile: true
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase.app(), reduxFirebaseConfig),
    reduxFirestore(firebase.app()),
    applyMiddleware(
      thunkMiddleware.withExtraArgument(getFirebase),
      createLogger()
    )
  )
);

export default store;
