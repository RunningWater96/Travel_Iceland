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