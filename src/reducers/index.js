import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const initialState = {
  id: null,
  step: 0,
  response: []
};

const currentTaskReducer = (state = initialState, action = {}) => {
  const { type, ...newState } = action;
  switch (type) {
    case 'START_NEW_TASK':
      return { ...initialState, id: action.id };
    case 'INCREMENT_CURRENT_TASK_STEP':
      return { ...initialState, step: state.step + 1 };
    case 'DECREMENT_CURRENT_TASK_STEP':
      return { ...initialState, step: state.step - 1 };
    case 'UPDATE_CURRENT_TASK_RESPONSE':
      return { ...initialState, ...newState };
    case 'FINISH_CURRENT_TASK':
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentTask: currentTaskReducer,
  firebase: firebaseReducer
});

export default rootReducer;
