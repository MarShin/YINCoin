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
  // enableLogging: false
  enableRedirectHandling: false,
  useFirestoreForProfile: true,
  userProfile: 'user',
  profileFactory: (userData, profileData) => {
    console.log('Firestore user data: ', userData);
    console.log();
    console.log('Firstore profile data: ', profileData);
    const { user } = userData;
    return { ...user, ...profileData };
  }
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
