(function () {
	'use strict';

	var go_left = document.querySelector('.prev'),
		go_right = document.querySelector('.next'),
		slides = document.querySelectorAll('.slides'),
		slides_length = slides.length,
		counter = 0,
		prev_counter = slides_length - 1;

	go_left.addEventListener('click', switchImages);
	go_right.addEventListener('click', switchImages);

	renderSlideShow();
	
	function switchImages(e) {
		e.preventDefault();
		if (e.currentTarget.className === 'prev') {
			prev_counter = counter;
			counter -= 1;
			counter = counter < 0 ? slides_length - 1 : counter;

		} else {
			prev_counter = counter;
			counter += 1;
			counter = counter > slides_length - 1 ? 0 : counter;
		}
		renderSlideShow();
	}

	function renderSlideShow () {
		if (counter === 0) {
			slides[counter].classList.add('show');
			slides[prev_counter].classList.remove('show');
		} else if (counter === slides_length - 1) {
			slides[slides_length - 1].classList.add('show');
			slides[prev_counter].classList.remove('show');
		} else {
			slides[counter].classList.add('show');
			slides[prev_counter].classList.remove('show');
		}
	}

}());