var request = new XMLHttpRequest();
var factTextElement = document.getElementById("factText");
var factNum = 0;
let url = "https://apis.is/cyclecounter";
var data;

function getRandomFact() {
    factNum = Math.floor(Math.random() * 4);

    switch (factNum) {
        
        case 1:
            url = "https://apis.is/cyclecounter";
            break;
        case 2:
            url = "https://apis.is/aur";
            break;
        case 3:
            url = "https://apis.is/earthquake/is";
            break;
        default:
            url = "https://apis.is/cyclecounter";
            break;
    }

    loadData();
}

function changeFactText() {
    switch (factNum) {
        case 1:
            factTextElement.innerHTML = "Iceland has counted " + data.results[0].DayCount 
            + " bikes today, and " + data.results[0].YearCount + " this year.";
            break;
        case 2:
            factTextElement.innerHTML = "Iceland's peer-to-peer cryptocurrency, Auroracoin, was last sold for $" + data.last_price;
            break;
        case 3:
            factTextElement.innerHTML = "Iceland's last earthquake was on: " + data.results[0].timestamp.split('T')[0] 
            + " at: " + data.results[0].timestamp.split('T')[1]
            break;
        default:
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