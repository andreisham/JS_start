'use strict';

let slider = document.querySelector('.slider');

// создаем иконку загрузки 
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// создаем стрелку влево 
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// создаем стрелку вправо 
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("afterbegin", rightArrow);


window.addEventListener('load', function(){

	images.init();

	leftArrow.addEventListener('click', function(){
		images.setNextLeftImage();
	});

	rightArrow.addEventListener('click', function(){
		images.setNextRightImage();
	});
	
	loadIcon.style.display = "none";

});

function setSizes(slider) {
	let width = slider.getAttribute("data-width");
	let height = slider.getAttribute("data-height");
	if (width !== null && width !== "") {
		slider.style.width = width;
	};
	if (height !== null && height !== "") {
		slider.style.height = height;
	}
}
setSizes(slider);

let images = {

	currentIdx: 0, // номер текущего изображения

	slides:[], // элементы слайдов

	init() {
		this.slides = document.querySelectorAll('.slider-item');
		this.showImageWithCurrentIdx(); // вызываем метод "покажи слайд с текущим ID"
	},

	showImageWithCurrentIdx() {
		this.slides[this.currentIdx].classList.remove('hidden-slide');
		
		
	},

	hideVisibleImage() {
		document.querySelector('.slider-item:not(.hidden-slide)').classList.add('hidden-slide');
	},


	/**
	 * переключиться влево
	 */
	setNextLeftImage(){
		this.hideVisibleImage();
		if (this.currentIdx == 0) {
			this.slides[this.currentIdx].classList.remove('slide-in-left', 'slide-in-right');
			
			this.currentIdx = this.slides.length - 1;
			
			
		} else {
			this.currentIdx--;
			this.slides[this.currentIdx + 1].classList.remove('slide-in-left', 'slide-in-right');
		}
		this.showImageWithCurrentIdx();
		this.slides[this.currentIdx].classList.add('slide-in-left');
		
		
	},
	/**
	 * переключиться вправо
	 */
	setNextRightImage(){
		this.hideVisibleImage();
		if (this.currentIdx == this.slides.length - 1) {
			this.currentIdx = 0;
			this.slides[(this.slides.length - 1)].classList.remove('slide-in-right', 'slide-in-left');
		} else {
			this.currentIdx++;
			this.slides[this.currentIdx - 1].classList.remove('slide-in-right', 'slide-in-left');
		}
		this.showImageWithCurrentIdx();
		this.slides[this.currentIdx].classList.add('slide-in-right');
		
	},
};

