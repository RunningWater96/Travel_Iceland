function getWeather() {
    let request = new XMLHttpRequest();
    request.open("GET", 'http://apis.is/weather/forecasts/en');
    request.send();
    request.onload = () => {
        if(request.status == 200) {
            let json = JSON.parse(request.response);
            document.getElementById('weather') = json.results;
        }
        else {
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}

getWeather();
