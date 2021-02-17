var api_key = "vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E";
var lastKey = localStorage.getItem('lastKey');


window.onload= function(){
  var viewLast= localStorage.getItem(lastKey);
      console.log(viewLast)
      var lastInfo= document.getElementById("park-info")
      console.log(lastInfo)
     lastInfo.innerHTML = viewLast;
};
// Display current State parks categories


// HERE YOU ALSO NEED CSS CHANGES
// .show{
// display: none;
// }

// ALSO I need to add a div with a class of show before everything
var findParkBtn = document.querySelector("#startFindLocalPark");

findParkBtn.addEventListener("click", function(){

  document.querySelector(".show").style.display = "block"
});





function statePark(Statedata) {

  var emptyStates = [];

  for (var i = 0; i < Statedata.data.length; i++) {
    console.log(Statedata.data);
    var nameNames = Statedata.data[i].fullName;
    console.log(nameNames);
    emptyStates.push(nameNames);
    console.log(emptyStates);
  }
  emptyStates.forEach(function (a, index) {
    var listParks = document.createElement("li");
    listParks.textContent = a;
    listParks.setAttribute("data-idx", index);
    console.log(listParks);
    console.log("data-idx", index);
    var seeNames = document.getElementById("park-list");
    seeNames.append(listParks);
    console.log(seeNames);

    listParks.addEventListener("click", function (e) {
      var index = e.target.getAttribute("data-idx");
      console.log(index);
      var parkInfo = Statedata.data[index].description;
      var seeInfo = document.getElementById("park-info");
      seeInfo.textContent="";
      seeInfo.append(parkInfo);

      var seeWeather = Statedata.data[index].weatherInfo;
      var postWeather = document.getElementById("park-weather-info");
      postWeather.textContent="";
      postWeather.append(seeWeather);



      //HERE 
      var seeParkName = Statedata.data[index].name;
      var postParkName = document.getElementById("park-name");
      postParkName.textContent="";
      postParkName.append(seeParkName);





      var seeImg = Statedata.data[index].images[0].url;

      var postImg = (document.getElementById("park-image").src = seeImg);

      // Local Storage

      localStorage.setItem(index, parkInfo);

      console.log(index)
      var lock = index
      console.log(lock)

      localStorage.setItem("lastKey", lock);

      // 

      var activitiesArray = [];
      var sdidx = Statedata.data[index];
      var totalActivities = Statedata.data[index].activities &&  Statedata.data[index].activities ; 
      var numberActivities = sdidx.activities && sdidx.activities.length < 20 ? sdidx.activities.length : 20;
      
      for (var i = 0; i < numberActivities; i++) {
        var parkActivities = Statedata.data[index].activities[i].name;
        activitiesArray.push(parkActivities);
      }
      console.log("hi",numberActivities)
      // if (numberActivities === 0){
     
      // }
      activitiesArray.forEach(function (x) {
        var list = document.createElement("li");
        list.textContent = x;
        var parks = document.getElementById("park-activities");
        parks.append(list);
      });
    });
  });
  return;
}

// Nested fetch calls to get user's State
requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch("https://ipapi.co/json/", requestOptions)
  .then((response) => response.text())
  .then((dataStr) => {
    let data = JSON.parse(dataStr);
    console.log(data.region_code);
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

        return;
      });
  });
