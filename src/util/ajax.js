export const makeRequest = (method, url, query) => {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    xhr.open(method, url);
    
    xhr.onload = function() {
      console.log(xhr);
      if (this.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    
    if (query) {
      if (typeof query !== "string") {
        query = JSON.stringify(query);
      }
      xhr.setRequestHeader("Content-Type", "application/json");
      // xhr.setRequestHeader("cache-control", "no-cache");
      xhr.send(query);
    } else {
      xhr.send();
    }
  });
};

export const fetchProphecies = () => {
  let url = "http://poe.ninja/api/Data/GetProphecyOverview?league=Abyss&date=2018-02-20";
  return makeRequest("GET", url);
};

// export const fetchIndex = () => {
//   // let url = "https://www.pathofexile.com/api/trade/search/abyss";
//   let url = "https://www.pathofexile.com/api/trade/data/items";
//   return makeRequest("GET", url);
// };
//
// export const fetchAllStashes = (id) => {
//   let url = "http://api.pathofexile.com/public-stash-tabs";
//   id = id ? id : "145259010-151925114-142524180-163955037-153711223";
//   // if (id) {
//     url += `/?id=${id}`;
//   // }
//   return makeRequest("GET", url);
// };
//
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
//   return makeRequest("GET", url, query);
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
