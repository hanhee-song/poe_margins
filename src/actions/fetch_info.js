import * as AJAX from '../util/ajax';

export const RECEIVE_TRADE_INFO = "RECEIVE_TRADE_INFO";
export const RECEIVE_INDEX = "RECEIVE_INDEX";

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

export const fetchIndex = () => {
  return dispatch => {
    return AJAX.fetchIndex()
      .then(
        info => dispatch(receiveIndex(info))
      );
  };
};

export const fetchTradeInfo = () => {
  return dispatch => {
    return AJAX.fetchTradeInfo()
      .then(
        info => dispatch(receiveTradeInfo(info))
      );
  };
};
