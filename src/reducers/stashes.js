import {
  RECEIVE_INFO,
} from '../actions/fetch_info';
import merge from 'lodash/merge';

const initialState = {};

const StashesReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_INFO:
      // TODO
      debugger;
      return state;
    default:
      return state;
  }
};

export default StashesReducer;
