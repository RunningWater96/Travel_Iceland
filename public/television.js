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
    document.getElementById("tvd").innerHTML = response.results[3].title
    document.getElementById("tvd2").innerHTML = response.results[3].duration
    document.getElementById("tvd3").innerHTML = response.results[3].startTime
    document.getElementById("tve").innerHTML = response.results[4].title
    document.getElementById("tve2").innerHTML = response.results[4].duration
    document.getElementById("tve3").innerHTML = response.results[4].startTime
    document.getElementById("tvf").innerHTML = response.results[5].title
    document.getElementById("tvf2").innerHTML = response.results[5].duration
    document.getElementById("tvf3").innerHTML = response.results[5].startTime
    document.getElementById("tvg").innerHTML = response.results[6].title
    document.getElementById("tvg2").innerHTML = response.results[6].duration
    document.getElementById("tvg3").innerHTML = response.results[6].startTime
    document.getElementById("tvh").innerHTML = response.results[7].title
    document.getElementById("tvh2").innerHTML = response.results[7].duration
    document.getElementById("tvh3").innerHTML = response.results[7].startTime
    document.getElementById("tvi").innerHTML = response.results[8].title
    document.getElementById("tvi2").innerHTML = response.results[8].duration
    document.getElementById("tvi3").innerHTML = response.results[8].startTime
  }
})
$.ajax({
  url: 'https://apis.is/tv/ruvithrottir',
  type: 'GET',
  dataType: 'json',
  success: function(response) {
    console.log(response);
    document.getElementById("tvj").innerHTML = response.results[0].title
    document.getElementById("tvj2").innerHTML = response.results[0].duration
    document.getElementById("tvj3").innerHTML = response.results[0].startTime
    document.getElementById("tvk").innerHTML = response.results[1].title
    document.getElementById("tvk2").innerHTML = response.results[1].duration
    document.getElementById("tvk3").innerHTML = response.results[1].startTime
    document.getElementById("tvl").innerHTML = response.results[2].title
    document.getElementById("tvl2").innerHTML = response.results[2].duration
    document.getElementById("tvl3").innerHTML = response.results[2].startTime
  }
})