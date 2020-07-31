var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhr.open("GET", "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=wembley&stadium&inputtype=textquery&fields=name,formatted_address&key=AIzaSyCdBqz5aZKn5u3_GeKoUVzRZS6bsw33p_o");

xhr.send();


