var xhr = new XMLHttpRequest();
var searchText = document.getElementById('searchBar');
const baseURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
const key = "&inputtype=textquery&fields=geometry,formatted_address,name,rating,price_level&key=AIzaSyCdBqz5aZKn5u3_GeKoUVzRZS6bsw33p_o";
//Coordinates for location marker



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
        //Coordinates for Google Maps marker
       //document.getElementById('geo').innerHTML = results.geometry.location;
        
        console.log(JSON.parse(this.responseText));
    }
};

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 }
  });
  const geocoder = new google.maps.Geocoder();
  document.getElementById("pointField").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  const address = document.getElementById("address").innerHTML;
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}











