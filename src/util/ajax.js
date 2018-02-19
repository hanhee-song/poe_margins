export const makeRequest = (method, url) => {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
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
    request.onerror = function () {
      reject({
        status: this.status,
        statusText: request.statusText
      });
    };
    request.send();
  });
};

export const fetchInfo = (nextId) => {
  let url = "http://www.pathofexile.com/api/public-stash-tabs";
  if (nextId) {
    url += nextId;
  }
  makeRequest("GET", url);
};
