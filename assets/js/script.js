
requestUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=me&api_key=vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
