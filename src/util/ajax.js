export const makeRequest = (method, url) => {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    debugger;
    request.open(method, url);
    request.onload = function() {
      if (this.status === 200) {
        resolve(request);
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
    const query = {
      "query": {
        "status": {
          "option": "online"
        },
        "name": "The Pariah",
        "type": "Unset Ring",
        "stats": [{
          "type": "and",
          "filters": []
        }]
      },
      "sort": {
        "price": "asc"
      }
    };
    
    request.send();
  });
};

export const fetchInfo = (nextId) => {
  // let url = "https://www.pathofexile.com/api/trade/search/abyss";
  let url = "https://www.pathofexile.com/api/trade/data/items";
  if (nextId) {
    url += nextId;
  }
  return makeRequest("GET", url);
};
