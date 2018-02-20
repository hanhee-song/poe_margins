import { RECEIVE_ALL_STASHES } from '../actions/fetch_info';
import merge from 'lodash/merge';

const initialState = "";

const NextIdReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_STASHES:
      return action.info.next_change_id;
    default:
      return state;
  }
};

export default NextIdReducer;
