$(function () {
	$('.slider').slick({
		arrows: true,
		slidesToShow: 3,
		infinite: true,
		responsive: [
			{
				breakpoint: 741,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

});
