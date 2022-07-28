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
	const accordion = document.getElementsByClassName('questions__item');

	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener('click', function () {
			this.classList.toggle('active')
		})
	}
});
