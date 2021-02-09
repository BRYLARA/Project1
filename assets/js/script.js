// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
//   mode: "no-cors",
// };
// fetch(
//   "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=nationalpark&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyA_hZqWHClBzWa05VtjZvkHB33MK09sDb4",
//   requestOptions
// )
//   .then(function (response) {
//     console.log(response)
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((error) => console.log("error", error));

var myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Origin", "https://maps.googleapis.com/maps/api/js");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: "no-cors",
};

fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=national park&inputtype=textquery&fields=photos,formatted_address,name,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyA_hZqWHClBzWa05VtjZvkHB33MK09sDb4", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
