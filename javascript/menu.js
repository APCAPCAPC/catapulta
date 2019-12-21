jQuery(function( $ ){
$(".site-header").after('<div class="bumper"></div>');
$(window).scroll(function () {
if ($(document).scrollTop() > 30 ) {$('.site-header').addClass('fija');} 
else {$('.site-header').removeClass('fija');}
});
 
});