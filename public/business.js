
var request = new XMLHttpRequest();
var companyListElement = document.getElementById("companyList");
var searchTerm = "Apple"
var baseURL = "https://apis.is/company?name=";
var data;

$(document).ready(function(){
    $.ajax({
      url: 'http://apis.is/currency/m5',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        console.log(response);
        document.getElementById("currencya").innerHTML = "Value: " + response.results[0].value
        document.getElementById("currencya1").innerHTML = "Change Cur: " + response.results[0].changeCur
        document.getElementById("currencya2").innerHTML = "Change Per: " + response.results[0].changePer
        document.getElementById("currencyb").innerHTML = "Value: " + response.results[2].value
        document.getElementById("currencyb1").innerHTML = "Change Cur: " + response.results[2].changeCur
        document.getElementById("currencyb2").innerHTML = "Change Per: " + response.results[2].changePer
      }
    })
})

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
