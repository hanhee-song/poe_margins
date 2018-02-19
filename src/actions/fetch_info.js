import * as AJAX from '../util/ajax';

export const RECEIVE_INFO = "RECEIVE_INFO";

export const receiveInfo = (info) => {
  return {
    type: RECEIVE_INFO,
    info
  };
};

export const fetchInfo = () => {
  return (dispatch) => {
    return AJAX.fetchInfo()
      .then(
        info => {
          debugger;
          dispatch(receiveInfo);
        }
      );
  };
};
