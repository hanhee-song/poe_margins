import { combineReducers } from 'redux';
import prophecies from './prophecies';

const RootReducer = combineReducers({
  prophecies,
});

export default RootReducer;
