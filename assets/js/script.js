var api_key = 'vGDXf8DoFmcbZXhc3BjABck16B2RdO6qNrXKXX1E'
var currentState = ''
// GETTING ALL PARKS USING STATE CODE  


var getApi = function(){
    let stateCode = $('#state-input').val();
    console.log(stateCode);
    let requestUrl = 'https://developer.nps.gov/api/v1/parks?stateCode='+ stateCode +'&api_key='+ api_key;
    fetch(requestUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    for (let i=0; i< data.data.length; i++){

        var parkEl =document.getElementById("showPark");
        // var directionEl =document.getElementById("showPark");
        // var basicInfoskEl =document.getElementById("showParkBasicInfos");
        // var activitiesEl =document.getElementById("showParkDirection");

        let p1El = document.createElement("p");
        // let p2El = document.createElement("p");
        // let p3El = document.createElement("p");
        

        p1El.textContent = data.data[i].fullName ;
        // p2El.textContent =  data.data[i].description;
        // p3El.textContent = data.data[i].directionsInfo;

        parkEl.appendChild(p1El);
        // basicInfoskEl.appendChild(p2El);
        // directionEl.appendChild(p3El);
        

    }
    });
};



// New city search button event listener
$('#submit-button').on("click", (event) => {
    event.preventDefault();
    currentState = $('#state-input').val();
    console.log(event);
    getApi();
});


var getLocation = function(latitude,longitude){
//  1-get google api 
//  2-get user latidude and longitude
//  3-compare all park locations to the user's and display the closest  
};



// MAP API /Caitlin below

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