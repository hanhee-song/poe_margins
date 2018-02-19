import { makeRequest } from '../util/ajax';

export const RECEIVE_INFO = "RECEIVE_INFO";

export const receiveInfo = (info) => {
  return {
    type: RECEIVE_INFO,
    info
  };
};

export const fetchInfo = () => {
  return (dispatch) => {
    return makeRequest()
      .then(
        info => dispatch(receiveInfo)
      );
  };
};
