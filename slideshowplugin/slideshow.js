;(function () {
	'use strict';

	var Slideshow = function (el, imageUrls) {
		this.el = el;
		this.imageUrls = imageUrls;

		return this;
	};

	Slideshow.prototype.render = function() {
		if (!this.el) { throw Error('No el supplied'); }
		if (!this.imageUrls || this.imageUrls.length === 0) { throw Error('No imageUrls supplied or imageUrls length is 0'); }
 
		this.element = document.querySelector(this.el);
		this.counter = 0;
		this.imageUrlsLength = this.imageUrls.length;
		this.prev_counter = this.imageUrlsLength - 1;

		this.switchImages = function (e) {
			e.preventDefault();
			if (e.currentTarget.className === 'prev') {
				this.prev_counter = this.counter;
				this.counter -= 1;
				this.counter = this.counter < 0 ? this.imageUrlsLength - 1 : this.counter;

			} else {
				this.prev_counter = this.counter;
				this.counter += 1;
				this.counter = this.counter > this.imageUrlsLength - 1 ? 0 : this.counter;
			}
			this.renderSlideShow();
		}.bind(this);

		(function generateHtml () {
			var slidesDiv, imageTag, leftTag, rightTag;

			for (var i = 0; i < this.imageUrlsLength; i++) {
				slidesDiv = document.createElement('div');
				slidesDiv.classList.add('slides');
				slidesDiv.classList.add('fade');
				imageTag = document.createElement('img');
				imageTag.classList.add('image-content');
				imageTag.src = this.imageUrls[i];
				slidesDiv.appendChild(imageTag);

				this.element.appendChild(slidesDiv);
			}

			leftTag = document.createElement('a');
			rightTag = document.createElement('a');

			leftTag.classList.add('prev');
			rightTag.classList.add('next');

			leftTag.innerHTML = '&#10094';
			rightTag.innerHTML = '&#10095';

			this.element.appendChild(leftTag);
			this.element.appendChild(rightTag);
		}.bind(this))();

		(function addEventHandlers() {
			var go_left = this.element.querySelector('.prev'),
				go_right = this.element.querySelector('.next');

			go_left.addEventListener('click', this.switchImages);
			go_right.addEventListener('click', this.switchImages);
		}.bind(this))();
		
		var slides = this.element.querySelectorAll('.slides');

		this.renderSlideShow = function () {
			if (this.counter === 0) {
				slides[this.counter].classList.add('show');
				slides[this.prev_counter].classList.remove('show');
			} else if (this.counter === this.imageUrlsLength - 1) {
				slides[this.imageUrlsLength - 1].classList.add('show');
				slides[this.prev_counter].classList.remove('show');
			} else {
				slides[this.counter].classList.add('show');
				slides[this.prev_counter].classList.remove('show');
			}
		}.bind(this);

		this.renderSlideShow();
	};

	window.Slideshow = Slideshow;
}());
