$(document).ready(function(){
  $.ajax({
    url: 'http://apis.is/sports/handball',
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      console.log(response);
      document.getElementById('p').innerHTML = response.results[0].Date;
    }
  });
})