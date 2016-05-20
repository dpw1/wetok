$(document).ready(function(){
	$('#slider-review').slick({
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: '#prev-sm',
	  nextArrow: '#next-sm'
	});


	$('#slider-details').slick({
	  infinite: false,
	  prevArrow: '#prev-lg',
	  nextArrow: '#next-lg'
	});
});