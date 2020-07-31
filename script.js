var xhr = new XMLHttpRequest();
var searchText = document.getElementById('searchBar');
const baseURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
const key = "&inputtype=textquery&fields=photos,formatted_address,name,rating,price_level&key=AIzaSyCdBqz5aZKn5u3_GeKoUVzRZS6bsw33p_o";

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
    event.preventDefault()
    xhr.open("GET", baseURL + searchBarInfo + key);
    xhr.send(); 
};

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var results = obj.candidates[0];
        document.getElementById('name').innerHTML = results.name;
        document.getElementById('address').innerHTML = results.formatted_address;
        document.getElementById('rating').innerHTML = results.rating;
        document.getElementById('price').innerHTML = results.price_level;

        console.log(JSON.parse(this.responseText));
    }
};






