// main slider 
$(window).load(function() {
$('.flexslider').flexslider({
controlNav: false
});
// $("#english").show();

});
// $(".nep").on("click",function(){
// 	alert("hee");
// $(".english-content").hide();
// $(".nepali-content").show();
// // $("#nepali").show();
// // $("#english").hide(); 
// });
// $(".english").on("click",function(){
// $(".nepali-content").hide();
// $(".english-content").show();
// // $("#nepali").show();
// // $("#english").hide(); 
// });


function sectionHeight() {
$('.home #main .section-content').animate({height: $('#sidebar').height() - 115});
var maincolHeight = $('.page #main .section-content').height();
var sidecolHeight = $('.page #sidebar').height();
if(maincolHeight < sidecolHeight) {
$('.page #main .section-content').css('min-height', sidecolHeight - 150);	
//alert (maincolHeight);
} 

}

$(document).ready(function() {
	// $("#nepali").hide();
sectionHeight();
var winWidth = $(window).width();
$('.main-navigation ul').superfish();


$('.check-email').click(function(e) {
e.preventDefault();
$('.login-pannel').slideToggle(500);
});

$('.section-content ol li').wrapInner('<span />');

// Use the swipebox only for  visible elements
// var swipeboxInstance = $(".swipebox-isotope:not(.isotope-hidden .swipebox-isotope)").swipebox();

// Callback function that fire the refresh method, once the animation is finished
onAnimationCompleted = function(){
swipeboxInstance.refresh();
};

// Isotope stuff
optionFilterLinks = $('#filter').find('a');
optionFilterLinks.attr('href', '#');

optionFilterLinks.click( function(){
var selector = $(this).attr('data-filter');
$('#gallery.row').isotope({ 
filter : '.' + selector, 
itemSelector : '.item',
layoutMode : 'fitRows',
animationEngine : 'best-available',
}, onAnimationCompleted); // callback here

optionFilterLinks.removeClass('active');
$(this).addClass('active');

return false;
});


});

$(window).resize(function() {
sectionHeight();
});

marqueeInit({
uniqueid: 'scroller',
style: {'height': '40px','width': '100%'},
inc: 4, //speed - pixel increment for each iteration of this marquee's movement
mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
moveatleast: 3,
addDelay: 20,
neutral: 1000,
savedirection: true
});

$(window).scroll(function () {
if ($(this).scrollTop() > 400) {
$('#top').fadeIn(500);
} else {
$('#top').fadeOut(500);
}
});
$('#top a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});