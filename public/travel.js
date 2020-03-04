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
