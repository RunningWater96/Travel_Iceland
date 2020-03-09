$(document).ready(function(){
  $.ajax({
    url: 'http://apis.is/sports/handball',
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      console.log(response);
      document.getElementById('a').innerHTML = response.results[0].Date;
      document.getElementById('a2').innerHTML = response.results[0].Time;
      document.getElementById('a3').innerHTML = response.results[0].Tournament;
      document.getElementById('a4').innerHTML = response.results[0].Venue;
      document.getElementById('a5').innerHTML = response.results[0].Teams;
      document.getElementById('b').innerHTML = response.results[1].Date;
      document.getElementById('b2').innerHTML = response.results[1].Time;
      document.getElementById('b3').innerHTML = response.results[1].Tournament;
      document.getElementById('b4').innerHTML = response.results[1].Venue;
      document.getElementById('b5').innerHTML = response.results[1].Teams;
      document.getElementById('c').innerHTML = response.results[2].Date;
      document.getElementById('c2').innerHTML = response.results[2].Time;
      document.getElementById('c3').innerHTML = response.results[2].Tournament;
      document.getElementById('c4').innerHTML = response.results[2].Venue;
      document.getElementById('c5').innerHTML = response.results[2].Teams;
      document.getElementById('d').innerHTML = response.results[3].Date;
      document.getElementById('d2').innerHTML = response.results[3].Time;
      document.getElementById('d3').innerHTML = response.results[3].Tournament;
      document.getElementById('d4').innerHTML = response.results[3].Venue;
      document.getElementById('d5').innerHTML = response.results[3].Teams;
      document.getElementById('e').innerHTML = response.results[4].Date;
      document.getElementById('e2').innerHTML = response.results[4].Time;
      document.getElementById('e3').innerHTML = response.results[4].Tournament;
      document.getElementById('e4').innerHTML = response.results[4].Venue;
      document.getElementById('e5').innerHTML = response.results[4].Teams;
    }
  });
  $.ajax({
    url: 'https://apis.is/tv/ruv',
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      console.log(response);
      document.getElementById("tva").innerHTML = response.results[0].title
      document.getElementById("tva2").innerHTML = response.results[0].duration
      document.getElementById("tva3").innerHTML = response.results[0].startTime
      document.getElementById("tvb").innerHTML = response.results[1].title
      document.getElementById("tvb2").innerHTML = response.results[1].duration
      document.getElementById("tvb3").innerHTML = response.results[1].startTime
      document.getElementById("tvc").innerHTML = response.results[2].title
      document.getElementById("tvc2").innerHTML = response.results[2].duration
      document.getElementById("tvc3").innerHTML = response.results[2].startTime
    }
  })
  $.ajax({
    url: 'https://apis.is/tv/ruvithrottir',
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      console.log(response);
      document.getElementById("tvd").innerHTML = response.results[0].title
      document.getElementById("tvd2").innerHTML = response.results[0].duration
      document.getElementById("tvd3").innerHTML = response.results[0].startTime
      document.getElementById("tve").innerHTML = response.results[1].title
      document.getElementById("tve2").innerHTML = response.results[1].duration
      document.getElementById("tve3").innerHTML = response.results[1].startTime
      document.getElementById("tvf").innerHTML = response.results[2].title
      document.getElementById("tvf2").innerHTML = response.results[2].duration
      document.getElementById("tvf3").innerHTML = response.results[2].startTime
    }
  })
})