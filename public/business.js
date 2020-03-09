var request = new XMLHttpRequest();
var companyListElement = document.getElementById("companyList");
var searchTerm = "Apple"
var baseURL = "https://apis.is/company?name=";
var data;

function getCompanies() {
    searchTerm = document.getElementById("searchBar").value
    companyListElement.innerHTML = "";

    loadData();

}

function updateCompanyListElement() {

    for (item in data.results) {
        companyListElement.innerHTML += "<li>" + data.results[item].name + "</li>"
    }
    
}

function loadData() {
    request.open('GET', baseURL + searchTerm);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    data = JSON.parse(request.responseText);

    updateCompanyListElement();
    
}

getCompanies();