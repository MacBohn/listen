"use strict";
$( document ).ready(function() {
    
  $('.container').on('click', '.fa-play', function() {
    $('.fa').removeClass('fa-pause').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-pause');
  });

  $('.container').on('click', '.fa-pause', function() {
    $(this).removeClass('fa-pause').addClass('fa-play');
  });

})
