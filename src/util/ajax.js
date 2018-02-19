export const makeRequest = (method, url, query) => {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = function() {
      console.log(request);
      if (this.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject({
          status: this.status,
          statusText: request.statusText
        });
      }
    };
    request.onerror = function() {
      reject({
        status: this.status,
        statusText: request.statusText
      });
    };
    if (query) {
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.send(query);
    } else {
      request.send();
    }
  });
};

export const fetchIndex = () => {
  // let url = "https://www.pathofexile.com/api/trade/search/abyss";
  let url = "https://www.pathofexile.com/api/trade/data/items";
  return makeRequest("GET", url);
};

export const fetchAllStashes = () => {
  return makeRequest("GET", "http://api.pathofexile.com/public-stash-tabs");
};

// export const fetchTradeInfo = (query) => {
//   query = {
//     "query": {
//       "status": {
//         "option": "online"
//       },
//       "name": "The Pariah",
//       "type": "Unset Ring",
//       "stats": [{
//         "type": "and",
//         "filters": []
//       }]
//     },
//     "sort": {
//       "price": "asc"
//     }
//   };
//   let url = "https://www.pathofexile.com/api/trade/search/abyss";
//   // return makeRequest("GET", url, JSON.stringify(query));
//   return makeRequest("GET", url);
// };

// export const fetchTradeInfo = (query) => {
//   query = {
//     "query": {
//       "status": {
//         "option": "online"
//       },
//       "name": "The Pariah",
//       "type": "Unset Ring",
//       "stats": [{
//         "type": "and",
//         "filters": []
//       }]
//     },
//     "sort": {
//       "price": "asc"
//     }
//   };
//   let url = "https://www.pathofexile.com/api/trade/search/abyss";
//   return $.ajax({
//   headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//   },
//   'type': 'POST',
//   'url': url,
//   'data': JSON.stringify(query),
//   'dataType': 'json',
//   });
// };
