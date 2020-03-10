function getWeather() {
    let request = new XMLHttpRequest();
    request.open("GET", 'http://apis.is/weather/forecasts/en?stations=1');
    request.send();
    request.onload = () => {
        if(request.status == 200) {
            let json = JSON.parse(request.response);
            console.log(json)

            document.getElementById('forecastDate').innerHTML = json.results[0].forecast[0].ftime;
            document.getElementById('forecast').innerHTML = json.results[0].forecast[0].W;

            document.getElementById('forecastDate1').innerHTML = json.results[0].forecast[1].ftime;
            document.getElementById('forecast1').innerHTML = json.results[0].forecast[1].W;

            document.getElementById('forecastDate2').innerHTML = json.results[0].forecast[2].ftime;
            document.getElementById('forecast2').innerHTML = json.results[0].forecast[2].W;

            document.getElementById('forecastDate3').innerHTML = json.results[0].forecast[3].ftime;
            document.getElementById('forecast3').innerHTML = json.results[0].forecast[3].W;

            document.getElementById('forecastDate4').innerHTML = json.results[0].forecast[4].ftime;
            document.getElementById('forecast4').innerHTML = json.results[0].forecast[4].W;

            document.getElementById('forecastDate5').innerHTML = json.results[0].forecast[5].ftime;
            document.getElementById('forecast5').innerHTML = json.results[0].forecast[5].W;

            document.getElementById('forecastDate6').innerHTML = json.results[0].forecast[6].ftime;
            document.getElementById('forecast6').innerHTML = json.results[0].forecast[6].W;
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

            document.getElementById('flightDate').innerHTML = json.results[2].date;
            document.getElementById('flightNum').innerHTML = json.results[2].flightNumber;
            document.getElementById('airline').innerHTML = json.results[2].airline;
            document.getElementById('from').innerHTML = json.results[2].from;
            document.getElementById('plannedArrival').innerHTML = json.results[2].plannedArrival;
            document.getElementById('realArrival').innerHTML = json.results[2].realArrival;
            document.getElementById('status').innerHTML = json.results[2].status;

            document.getElementById('flightDate1').innerHTML = json.results[3].date;
            document.getElementById('flightNum1').innerHTML = json.results[3].flightNumber;
            document.getElementById('airline1').innerHTML = json.results[3].airline;
            document.getElementById('from1').innerHTML = json.results[3].from;
            document.getElementById('plannedArrival1').innerHTML = json.results[3].plannedArrival;
            document.getElementById('realArrival1').innerHTML = json.results[3].realArrival;
            document.getElementById('status1').innerHTML = json.results[3].status;

            document.getElementById('flightDate2').innerHTML = json.results[4].date;
            document.getElementById('flightNum2').innerHTML = json.results[4].flightNumber;
            document.getElementById('airline2').innerHTML = json.results[4].airline;
            document.getElementById('from2').innerHTML = json.results[4].from;
            document.getElementById('plannedArrival2').innerHTML = json.results[4].plannedArrival;
            document.getElementById('realArrival2').innerHTML = json.results[4].realArrival;
            document.getElementById('status2').innerHTML = json.results[4].status;

            document.getElementById('flightDate3').innerHTML = json.results[5].date;
            document.getElementById('flightNum3').innerHTML = json.results[5].flightNumber;
            document.getElementById('airline3').innerHTML = json.results[5].airline;
            document.getElementById('from3').innerHTML = json.results[5].from;
            document.getElementById('plannedArrival3').innerHTML = json.results[5].plannedArrival;
            document.getElementById('realArrival3').innerHTML = json.results[5].realArrival;
            document.getElementById('status3').innerHTML = json.results[5].status;

            document.getElementById('flightDate4').innerHTML = json.results[6].date;
            document.getElementById('flightNum4').innerHTML = json.results[6].flightNumber;
            document.getElementById('airline4').innerHTML = json.results[6].airline;
            document.getElementById('from4').innerHTML = json.results[6].from;
            document.getElementById('plannedArrival4').innerHTML = json.results[6].plannedArrival;
            document.getElementById('realArrival4').innerHTML = json.results[6].realArrival;
            document.getElementById('status4').innerHTML = json.results[6].status;

            document.getElementById('flightDate5').innerHTML = json.results[7].date;
            document.getElementById('flightNum5').innerHTML = json.results[7].flightNumber;
            document.getElementById('airline5').innerHTML = json.results[7].airline;
            document.getElementById('from5').innerHTML = json.results[7].from;
            document.getElementById('plannedArrival5').innerHTML = json.results[7].plannedArrival;
            document.getElementById('realArrival5').innerHTML = json.results[7].realArrival;
            document.getElementById('status5').innerHTML = json.results[7].status;

            document.getElementById('flightDate6').innerHTML = json.results[8].date;
            document.getElementById('flightNum6').innerHTML = json.results[8].flightNumber;
            document.getElementById('airline6').innerHTML = json.results[8].airline;
            document.getElementById('from6').innerHTML = json.results[8].from;
            document.getElementById('plannedArrival6').innerHTML = json.results[8].plannedArrival;
            document.getElementById('realArrival6').innerHTML = json.results[8].realArrival;
            document.getElementById('status6').innerHTML = json.results[8].status;
        }
        else {
            console.log(request)
        }
    }
}

getFlights();
