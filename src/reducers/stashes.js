import {
  RECEIVE_TRADE_INFO,
  // RECEIVE_INDEX,
  RECEIVE_ALL_STASHES,
} from '../actions/fetch_info';
import merge from 'lodash/merge';

const initialState = {};

const StashesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRADE_INFO:
      // TODO
      debugger;
      return state;
    // case RECEIVE_INDEX:
    //   debugger;
    //   return state;
    case RECEIVE_ALL_STASHES:
      const newState = merge({}, state);
      const newStashes = action.info.stashes.filter(stash => stash.public && stash.items.length > 0);
      newStashes.forEach(stash => {
        newState[stash.id] = stash;
      });
      console.log(Object.keys(newState).length);
      return newState;
    default:
      return state;
  }
};

export default StashesReducer;
