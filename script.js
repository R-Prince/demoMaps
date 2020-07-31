var xhr = new XMLHttpRequest();
var searchText = document.getElementById('searchBar');

document.querySelector('#searchBar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(searchText.value);
        event.preventDefault()
    }
});

var search = function (){
    console.log(searchText.value);
    event.preventDefault()
};

/*searchText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    console.log(searchText.value);
    }
    event.preventDefault()
});*/

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

/* xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Wembley%20Stadium&inputtype=textquery&fields=photos,formatted_address,name,rating,price_level&key=AIzaSyCdBqz5aZKn5u3_GeKoUVzRZS6bsw33p_o");

xhr.send(); */




