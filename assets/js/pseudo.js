// Global var 
 //storedPlaces=[] 

// What we want to happen:
  //Search maps  (parameters: miles from input location, name of park)
  //NP open/close status & link Activities?    
  //Weather (parameter: current day, temperature, basic status (rain/snow/sun))   



// Functions
 
  //checklocalStorage at the beginning every time   

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

        var parkEl =document.getElementById("show-park");
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



