function getWeather() {
    let request = new XMLHttpRequest();
    request.open("GET", 'http://apis.is/weather/forecasts/en?stations=1');
    request.send();
    request.onload = () => {
        if(request.status == 200) {
            let json = JSON.parse(request.response);
            console.log(json)

            document.getElementById('forecast').innerHTML = json.results[0].forecast[0].W;

        }
        else {
            console.log(request)
        }
    }
}

getWeather();

function getFlights() {
    let request = new XMLHttpRequest();
    request.open("GET", 'http://apis.is/flight');
    request.send();
    request.onload = () => {
        if(request.status == 200) {
            let json = JSON.parse(request.response);
            console.log(json)

            document.getElementById('flights').innerHTML = json.results[0].flights[0];

        }
        else {
            console.log(request)
        }
    }
}

getFlights();
