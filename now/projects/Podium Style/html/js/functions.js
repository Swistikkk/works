"use strict";
$(document).ready(function () {
    $('.good-card').click(function () {
        $('.good-card').children('.good-sizes').slideToggle();
    });
    $('.your-class').slick({
    	dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
    });
});