import * as ajax from '../util/ajax';

export const RECEIVE_TRADE_INFO = "RECEIVE_TRADE_INFO";
export const RECEIVE_INDEX = "RECEIVE_INDEX";
export const RECEIVE_ALL_STASHES = "RECEIVE_ALL_STASHES";

export const receiveTradeInfo = info => {
  return {
    type: RECEIVE_TRADE_INFO,
    info
  };
};

export const receiveIndex = info => {
  return {
    type: RECEIVE_INDEX,
    info
  };
};

export const receiveAllStashes = info => {
  return {
    type: RECEIVE_ALL_STASHES,
    info
  };
};

export const fetchIndex = () => {
  return dispatch => {
    return ajax.fetchIndex()
      .then(
        info => dispatch(receiveIndex(info))
      );
  };
};

export const fetchTradeInfo = () => {
  return dispatch => {
    return ajax.fetchTradeInfo()
      .then(
        info => dispatch(receiveTradeInfo(info))
      );
  };
};

export const fetchAllStashes = (id) => {
  return dispatch => {
    return ajax.fetchAllStashes(id)
      .then(
        info => dispatch(receiveAllStashes(info))
      );
  };
};
