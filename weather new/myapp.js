/*
Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.
http://darkskyapp.github.io/skycons/
*/
var skycons = new Skycons({"color": "gray"});
  // on Android, a nasty hack is needed: {"resizeClear": true}

  // you can add a canvas by it's ID...
  //today
  skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);

var skycons = new Skycons({"color": "pink"});

  skycons.add("day1", Skycons.CLEAR_DAY);
  skycons.add("day2", Skycons.CLOUDY);
  skycons.add("day3", Skycons.RAIN);

  // start animation!
  skycons.play();
  
  // want to change the icon? no problem:
  //skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
  
/*
Get value from Bootstrap dropdown menu
*/
$('#dropdown li').on('click', function(){
    alert($(this).text());
});


//Today's weather
//Taipei

$(function () {
  var weather
  var feed 
  var title 
  var content,
    rss = 'http://weather.yahooapis.com/forecastrss?w=2306179&u=c',
    url = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=' + encodeURIComponent(rss);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    error: function (e) {
      console.log('oh no');
    },
    success: function (e) {
      weather = $(e);
      feed = weather[0].responseData.feed;
      console.log(weather);
      console.log(feed);
      title = feed.title;
      content = feed.entries[0].content;
      $('h3').append(title);
      $('#weather').append(content);
    }
  });
});



//date1

//date2


//date3
