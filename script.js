var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhr.open("GET", "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=wembley&stadium&inputtype=textquery&fields=name,formatted_address&key=AIzaSyCDaBMEesohdwFUDBgMjKcQltjY1uIQv1k");

xhr.send();

var apiKey = "AIzaSyCDaBMEesohdwFUDBgMjKcQltjY1uIQv1k";

