var api_key = "vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E";

// Caitlin State stuff


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
      seeInfo.append(parkInfo);

      var seeWeather = Statedata.data[index].weatherInfo;
      var postWeather = document.getElementById("park-weather-info");
      postWeather.append(seeWeather);



      //HERE 
      var seeParkName = Statedata.data[index].name;
      var postParkName = document.getElementById("park-name");
      postParkName.append(seeParkName);





      var seeImg = Statedata.data[index].images[0].url;

      var postImg = (document.getElementById("park-image").src = seeImg);

      var activitiesArray = [];
      for (var i = 0; i < 20; i++) {
        var parkActivities = Statedata.data[index].activities[i].name;
        activitiesArray.push(parkActivities);
      }
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

// Caitlin and Drissa
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

// LocalStorage function
// Click event on "Random Park" button, outputs from name array[i] and saves to local storage (Set localStorage). When page loads (get localStorage) and display last result from pushing "Random Park". If button is pushed again recognize two items in localStorage and only save 1 so not too much info is displayed. Maybe write a message to user before button is clicked? "Discover other parks in the US!"?
