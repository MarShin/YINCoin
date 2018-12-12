import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const initialState = {
  isReferrerExist: false
};

const checkReferralReducer = (state = initialState, action = {}) => {
  const { type, ...newState } = action;
  switch (type) {
    case 'REFERRER_EXIST':
      return {
        ...initialState,
        isReferrerExist: true,
        referralID: action.referralID
      };
    case 'REFERRER_NOT_EXIST':
      return { ...initialState, isReferrerExist: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  referral: checkReferralReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
