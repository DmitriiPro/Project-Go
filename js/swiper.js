const swiper = () => {

	const swiper = new Swiper('.swiper', {
		slidePerView: 1,
		loop: true,
		navigation: {
		nextEl: '.button-right',
		prevEl: '.button-left',
		},

		mousewheel: true,
		keyboard: true,


		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 5
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 1,
				spaceBetween: 5
			},
			// when window width is >= 640px
			1024: {
				slidesPerView: 1,
				spaceBetween: 5
			}
		}
	});

};

export {swiper}