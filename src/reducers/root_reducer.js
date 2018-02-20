import { combineReducers } from 'redux';
import stashes from './stashes';
import nextChangeId from './next_id';

const RootReducer = combineReducers({
  stashes,
  nextChangeId
});

export default RootReducer;
