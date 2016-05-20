$(document).ready(function(){
	$('#slider-review').slick({
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: '#prev-sm',
	  nextArrow: '#next-sm'
	});


	$('.slider-details').slick({
	  infinite: false,
	  prevArrow: '#prev-lg',
	  nextArrow: '#next-lg'
	});
    

    
    $('.details-tab nav ul li').each( function( i ) {

      $('.tab-0' + (i+1) + ' a').click(function(){
        alert('.tab-0' + (i+1) + ' a');
        $('.slider-details').slickGoTo(3);
      })
    })
});