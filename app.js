"use strict";
$( document ).ready(function() {


  $('.container').on('click', '.fa-play', function() {
    var id = $(this).data('id')
    document.getElementById(id).play()
    $('.fa').removeClass('fa-stop').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-stop');
    var title = $(this).data('title')
    $('.header').html("Now Playing: " + title )
  });

  $('.container').on('click', '.fa-stop', function() {
    var id = $(this).data('id')
    document.getElementById(id).stop()
    $(this).removeClass('fa-stop').addClass('fa-play');
    $('.header').html("Select a song!")
  });

  $.getJSON('data.json', function(tracks) {
    var $tracksTemplate = $('#tracksTemplate').html();
    var newHTML = Mustache.to_html($tracksTemplate, tracks);
    $('.player').html(newHTML);
  });

  $.getJSON('data.json', function(id) {
    var $headerTemplate = $('#headerTemplate').html();
    var newHTML = Mustache.to_html($headerTemplate, id);
    $('.header').html(newHTML);
  });
});
