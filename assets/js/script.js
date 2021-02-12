var api_key = "vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E";
// var currentState = "";
// // GETTING ALL PARKS USING STATE CODE

// var getApi = function () {
//   let stateCode = $("#state-input").val();
//   console.log(stateCode);
//   let requestUrl =
//     "https://developer.nps.gov/api/v1/parks?stateCode=" +
//     stateCode +
//     "&api_key=" +
//     api_key;
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for (let i = 0; i < data.data.length; i++) {
//         // var parkEl = document.getElementById("show-park");
//         // var directionEl =document.getElementById("showPark");
//         // var basicInfoskEl =document.getElementById("showParkBasicInfos");
//         // var activitiesEl =document.getElementById("showParkDirection");

//         let p1El = document.createElement("p");
//         // let p2El = document.createElement("p");
//         // let p3El = document.createElement("p");

//         p1El.textContent = data.data[i].fullName;
//         // p2El.textContent =  data.data[i].description;
//         // p3El.textContent = data.data[i].directionsInfo;

//         parkEl.appendChild(p1El);
//         // basicInfoskEl.appendChild(p2El);
//         // directionEl.appendChild(p3El);
//       }
//     });
// };


// DAVID BUSHARD CODE
function parkInfoDisplay(parkData) {
  // Info Card
  var parkName = parkData.data[0].fullName;
  var parkInfo = parkData.data[0].description;
  document.getElementById("park-name").textContent = parkName;
  document.getElementById("park-info").textContent = parkInfo;
  // Activities Card

  var empty = [];

  for (var i = 0; i < 20; i++) {
    var parkActivities = parkData.data[0].activities[i].name;
    empty.push(parkActivities);

    // console.log("this is park activities array " + parkActivities);
  }

  empty.forEach(function (x) {
    var list = document.createElement("li");
    list.textContent = x;
    var parks = document.getElementById("park-activities");
    console.log(list)
    parks.append(list);
  });

  //   if parkData.data[0].activities[0].name.length
  // }

  // Direction Card
  //     var parkImage = parkData.data[0].images[0].url + '.jpg'
  //     document.getElementById('park-image').src = parkImage;
  // console.log(parkImage);
  return;
}

fetch(
  "https://developer.nps.gov/api/v1/parks?api_key=vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E&q=parks"
 )
  .then((response) => response.json())
  .then((parkData) => {
    if (parkData) {
      parkInfoDisplay(parkData);
    }
    console.log(parkData);
    return;
  });
;

// End of David



// Caitlin and Drissa
function statePark(Statedata) {

  var emptyStates= [];

  for (var i = 0; i < Statedata.data.length; i++) {
    console.log(Statedata.data)
    var nameNames = Statedata.data[i].fullName;
    console.log(nameNames)
    emptyStates.push(nameNames);
   console.log(emptyStates)
    
  }
  emptyStates.forEach(function (a) {
    var listParks = document.createElement("li");
    listParks.textContent = a;
    console.log(listParks)
    var seeNames = document.getElementById("park-name");
    seeNames.append(listParks);
  });
  return;
}


requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch("https://ipapi.co/json/", requestOptions)
  .then((response) => response.json())
  .then((IPdata) => {
    console.log(IPdata.region_code);
    var yourST = IPdata.region_code;
    console.log(yourST + "hello");

    return fetch(
      "https://developer.nps.gov/api/v1/parks?stateCode=" +
        yourST +
        "&api_key=" +
        api_key,
      requestOptions
    );
  })
  .then((response) => {
    return response.json();
  })
  .then((Statedata) => {
    if (Statedata) {
      statePark(Statedata);
    }
    console.log(Statedata);
    return;
  });



