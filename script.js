var xhr = new XMLHttpRequest();
var searchText = document.getElementById('searchBar');
const baseURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
const key = "&inputtype=textquery&fields=geometry,formatted_address,name,rating,price_level&key=AIzaSyCdBqz5aZKn5u3_GeKoUVzRZS6bsw33p_o";
var coord = false;


document.querySelector('#searchBar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var searchInfo = searchText.value;
        var searchBarInfo = searchInfo.replace(/ /gi, "%20");
        xhr.open("GET", baseURL + searchBarInfo + key);
        xhr.send(); 
        event.preventDefault()
    }
});

var search = function (){
    var searchInfo = searchText.value;
    var searchBarInfo = searchInfo.replace(/ /gi, "%20");
    xhr.open("GET", baseURL + searchBarInfo + key);
    xhr.send();
    event.preventDefault()
};

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var results = obj.candidates[0];
        document.getElementById('name').innerHTML = results.name;
        document.getElementById('address').innerHTML = results.formatted_address;
        document.getElementById('rating').innerHTML = results.rating;
        document.getElementById('price').innerHTML = results.price_level;
        coord = results.geometry.location;
        console.log(JSON.parse(this.responseText));
    }
};

function showMap(){
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdBqz5aZKn5u3_GeKoUVzRZS6bsw33p_o&callback=initMap";
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function() {
   // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Search bar text
  var marker = new google.maps.Marker({position: coord, map: map});
};
// Append the 'script' element to 'head'
document.head.appendChild(script);      
}











