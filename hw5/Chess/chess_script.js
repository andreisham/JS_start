'use strict';



const buttons = document.querySelector(button); // выбираем кнопку
button.addEventListener('click', buildBoard);

const blocks = document.querySelectorAll('.chess__box'); // выбираем все блоки на странице
const bw_blocks = document.querySelectorAll('.chess__box_bw');

buttons.forEach((button) => {  // назначаем каждой кнопке обработчик события
	button.addEventListener('click', showText);
});


function buildBoard(event){
	
	
	
	buttons.remove(); // удаляем изображения
	event.target.insertAdjacentHTML("beforebegin", "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, atque?</p>"); // вставляем перед кнопкой текст
}