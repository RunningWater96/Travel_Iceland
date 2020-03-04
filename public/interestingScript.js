var request = new XMLHttpRequest();
var factTextElement = document.getElementById("factText");
var factNum = 0;
let url;
var data;

function getRandomFact() {
    factNum = Math.floor(Math.random() * 10);

    switch (factNum) {
        default:
        case 1:
            url = "https://apis.is/cyclecounter";
            break;
    }
    
    loadData();
}

function changeFactText() {
    switch (factNum) {
        default:
        case 1:
            factTextElement.innerHTML = "Iceland has counted " + data.results[0].DayCount 
                                        + " bikes today, and " + data.results[0].YearCount + " this year.";
            break;
    }
}

function loadData() {
    request.open('GET', url);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    data = JSON.parse(request.responseText);
    
    changeFactText();
}

getRandomFact();