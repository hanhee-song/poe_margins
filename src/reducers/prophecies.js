import { RECEIVE_ALL_PROPHECIES } from '../actions/fetch_info';
import merge from 'lodash/merge';

const initialState = [];

const PropheciesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROPHECIES:
      return action.payload.lines;
    default:
      return state;
  }
};

export default PropheciesReducer;
