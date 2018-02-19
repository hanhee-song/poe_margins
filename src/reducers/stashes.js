import {
  RECEIVE_TRADE_INFO,
  RECEIVE_INDEX,
  RECEIVE_ALL_STASHES,
} from '../actions/fetch_info';
import merge from 'lodash/merge';

const initialState = {};

const StashesReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRADE_INFO:
      // TODO
      debugger;
      return state;
    case RECEIVE_INDEX:
      debugger;
      return state;
    case RECEIVE_ALL_STASHES:
      debugger;
      let stashes = action.info.stashes;
      stashes = stashes.filter(stash => stash.public);
      return stashes;
    default:
      return state;
  }
};

export default StashesReducer;
