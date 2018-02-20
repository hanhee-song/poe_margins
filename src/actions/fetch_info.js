import * as ajax from '../util/ajax';

export const RECEIVE_ALL_PROPHECIES = "RECEIVE_ALL_PROPHECIES";

export const receiveAllProphecies = (payload) => {
  return {
    type: RECEIVE_ALL_PROPHECIES,
    payload
  };
};

export const fetchProphecies = () => {
  return (dispatch) => {
    return ajax.fetchProphecies()
      .then(
        payload => dispatch(receiveAllProphecies(payload))
      );
  };
};

// import * as scrape from '../util/scrape';

// export const RECEIVE_TRADE_INFO = "RECEIVE_TRADE_INFO";
// export const RECEIVE_INDEX = "RECEIVE_INDEX";
// export const RECEIVE_ALL_STASHES = "RECEIVE_ALL_STASHES";
// export const RECEIVE_TRADE_INDEX = "RECEIVE_TRADE_INDEX";

// export const receiveTradeInfo = info => {
//   return {
//     type: RECEIVE_TRADE_INFO,
//     info
//   };
// };
//
// export const receiveIndex = info => {
//   return {
//     type: RECEIVE_INDEX,
//     info
//   };
// };
//
// export const receiveAllStashes = info => {
//   return {
//     type: RECEIVE_ALL_STASHES,
//     info
//   };
// };
//
// export const receiveTradeIndex = info => {
//   return {
//     type: RECEIVE_TRADE_INDEX,
//     info
//   };
// };


// export const fetchIndex = () => {
//   return dispatch => {
//     return ajax.fetchIndex()
//       .then(
//         info => dispatch(receiveIndex(info))
//       );
//   };
// };
//
// export const fetchTradeInfo = () => {
//   return dispatch => {
//     return ajax.fetchTradeInfo()
//       .then(
//         info => dispatch(receiveTradeInfo(info))
//       );
//   };
// };
//
// export const fetchAllStashes = (id) => {
//   return dispatch => {
//     return ajax.fetchAllStashes(id)
//       .then(
//         info => dispatch(receiveAllStashes(info))
//       );
//   };
// };
//
// export const fetchTradeIndex = () => {
//   return (dispatch) => {
//     return scrape.fetchTradeIndex()
//       .then(
//         info => dispatch(receiveTradeIndex(info))
//       );
//   };
// };
