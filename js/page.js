$(document).ready(function() {

  var singles = [
    {
      "title":"District 1",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    },
    {
      "title":"District 2",
      "link":"http://lltt.nfshost.com/ish/D2.html"
    },
    {
      "title":"District 3",
      "link":"http://lltt.nfshost.com/ish/D3.html"
    },
    {
      "title":"District 4",
      "link":"http://lltt.nfshost.com/ish/D4.html"
    },
    {
      "title":"District 5",
      "link":"http://lltt.nfshost.com/ish/D5.html"
    },
    {
      "title":"District 6",
      "link":"http://lltt.nfshost.com/ish/D6.html"
    },
      {
      "title":"District 7",
      "link":"http://lltt.nfshost.com/ish/D7.html"
    },
      {
      "title":"Position 8",
      "link":"http://lltt.nfshost.com/ish/P8.html"
    },
    {
      "title":"Position 9",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    },
    {
      "title":"Prop 1",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    },
    {
      "title":"I-122",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    }
  ];

  var doubles = [
    {
      "title":"District 1.1",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    },
    {
      "title":"District 2",
      "link":"http://lltt.nfshost.com/ish/D2.html"
    },
    {
      "title":"District 3",
      "link":"http://lltt.nfshost.com/ish/D3.html"
    },
    {
      "title":"District 4",
      "link":"http://lltt.nfshost.com/ish/D4.html"
    },
    {
      "title":"District 5",
      "link":"http://lltt.nfshost.com/ish/D5.html"
    },
    {
      "title":"District 6",
      "link":"http://lltt.nfshost.com/ish/D6.html"
    },
      {
      "title":"District 7",
      "link":"http://lltt.nfshost.com/ish/D7.html"
    },
      {
      "title":"Position 8",
      "link":"http://lltt.nfshost.com/ish/P8.html"
    },
    {
      "title":"Position 9",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    },
    {
      "title":"Prop 1",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    },
    {
      "title":"I-122",
      "link":"http://lltt.nfshost.com/ish/D1.html"
    }
  ];

  // init

  var mapData = singles;
  var compare = false;
  var mapIndex = 0;

  function fillNav() { // fill nav bar from mapData and add button at end of list;
    mapData.forEach(function(map) {
      $('nav ul').append('<li class="nav-item"><a href="" data-map-link="' + map.link + '">' + map.title + '</a></li>');
    });
    $('nav ul').append('<li class="nav-item"><button id="switch-mode" type="button"></button></li>');
  }

  function mainSelect(dest) { // select url for iframe
    $('#frame').attr('src', dest);
  }

  fillNav();
  mainSelect(mapData[0].link);
  $('.nav-item a').first().addClass('nav-current current-color');
  $('main').width($('body').width() - 110);
  $('#switch-mode').text('COMPARE');

  $(window).resize(function() { // calculate main (right-floated) div width relative to vw - navbar width
    $('main').width($('body').width() - 110);
    console.log($('body').width(), $('main').width());
  });

  $('.nav-item a').click(function() { // map list click handler
    var url = $(this).attr('data-map-link');
    mapIndex = $(this).parent().index();
    console.log('index', mapIndex);
    $('.nav-item a').removeClass();
    $(this).addClass('nav-current current-color');
    mainSelect(url);
    return false;
  });

  $('#switch-mode').click(function() { // button handler
    compare = !compare;
    if (compare) {
      $('#switch-mode').text('SUMMARY');
      mapData = doubles;
    } else {
      $('#switch-mode').text('COMPARE');
      mapData = singles;
    }
    mainSelect(mapData[mapIndex].link);
  });
});
