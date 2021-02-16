var api_key = "vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E";

// Display current State parks categories

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
      var seeInfo = Statedata.data[index].description;
      var postInfo = document.getElementById("park-info");
      postInfo.append(seeInfo);

      var seeWeather = Statedata.data[index].weatherInfo;
      var postWeather = document.getElementById("park-weather-info");
      postWeather.append(seeWeather);

      var seeImg = Statedata.data[index].images[0].url;

      var postImg = (document.getElementById("park-image").src = seeImg);

      // Local Storage

      localStorage.setItem(("data-idx", index), seeInfo);

      var viewLast= localStorage.getItem(("data-idx", index));
      console.log(viewLast)
      var lastInfo= document.getElementById("park-info")
      console.log(lastInfo)


      let pastInfo
      if(localStorage.getItem('pastInfo') === null){
        pastInfo = [];
      }else{
        pastInfo = JSON.parse(localStorage.getItem('pastInfo'));
      }
      pastInfo.push(lastInfo);

      // 

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
