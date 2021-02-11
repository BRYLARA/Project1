var api_key = "vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E";
var currentState = "";
// GETTING ALL PARKS USING STATE CODE

var getApi = function () {
  let stateCode = $("#state-input").val();
  console.log(stateCode);
  let requestUrl =
    "https://developer.nps.gov/api/v1/parks?stateCode=" +
    stateCode +
    "&api_key=" +
    api_key;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.data.length; i++) {
        var parkEl = document.getElementById("show-park");
        // var directionEl =document.getElementById("showPark");
        // var basicInfoskEl =document.getElementById("showParkBasicInfos");
        // var activitiesEl =document.getElementById("showParkDirection");

        let p1El = document.createElement("p");
        // let p2El = document.createElement("p");
        // let p3El = document.createElement("p");

        p1El.textContent = data.data[i].fullName;
        // p2El.textContent =  data.data[i].description;
        // p3El.textContent = data.data[i].directionsInfo;

        parkEl.appendChild(p1El);
        // basicInfoskEl.appendChild(p2El);
        // directionEl.appendChild(p3El);
      }
    });
};

// New city search button event listener
$("#submit-button").on("click", (event) => {
  event.preventDefault();
  currentState = $("#state-input").val();
  console.log(event);
  getApi();
});

// MAP API /Caitlin below

var goButton = document.getElementById("submit-button"),
  requestOptions = {
    method: "POST",
    redirect: "follow",
    mode: "no-cors",
  };

fetch(
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=national park&inputtype=textquery&fields=formatted_address,name,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyD1vmdNp2nQIkRFAzPqTGnMtDYLRRVBoqc",
  requestOptions
)
  .then((response) => response.text())
  .then((dataStr) => {
    let data = JSON.parse(dataStr);
    console.log(data.candidates[0].name);
    var parkName = data.candidates[0].name;
    document.getElementById("official-name").textContent = parkName;
  })
  .catch((error) => console.log("error", error));

//   var listParks = document.getElementById("show-park");
//   let namesEl = document.createElement("p");
//   namesEl.textContent = data.candidates[0].name;
//   listParks.appendChild(namesEl);
requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch("https://ipapi.co/json/", requestOptions)
  .then((response) => response.text())
  .then((dataStr) => {
    let data = JSON.parse(dataStr);
    console.log(data.region_code);
  });
;




// DAVID BUSHARD CODE
function parkInfoDisplay(parkData) {
  // Info Card
  var parkName = parkData.data[0].fullName
  var parkInfo = parkData.data[0].description
  document.getElementById('park-name').textContent = parkName
  document.getElementById('park-info').textContent = parkInfo

  // Activities Card
    
  var empty =[]
    
  for (var i = 0; i < 20; i++){
      var parkActivities = parkData.data[0].activities[i].name
      empty.push(parkActivities)

      // console.log("this is park activities array " + parkActivities);
     }

empty.forEach(function(x){
  var list = document.createElement('li');
  list.textContent = x;
  var parks = document.getElementById('park-activities');
  parks.append(list);
});

    
  //   if parkData.data[0].activities[0].name.length 
  // }

  // Direction Card
  //     var parkImage = parkData.data[0].images[0].url + '.jpg'
  //     document.getElementById('park-image').src = parkImage;
  // console.log(parkImage);
  return;
};

fetch("https://developer.nps.gov/api/v1/parks?api_key=vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E&q=parks")
  .then(response => response.json())
  .then(parkData => {
    if (parkData) {
      parkInfoDisplay(parkData)
    }
    console.log(parkData)
    return;
  });




// Caitlin and Drissa 
requestOptions = {
  method: "POST",
  redirect: "follow",
};
fetch(
  "https://ipapi.co/json/", requestOptions
).then((response) => response.text())
  .then((dataStr) => {
    let data = JSON.parse(dataStr);
    console.log(data.region_code);
  })
