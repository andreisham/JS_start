'use strict';

const buttons = document.querySelectorAll('button'); // выбираем все кнопки на странице
buttons.forEach((button) => {  // назначаем каждой кнопке обработчик события
	button.addEventListener('click', showText);
});


function showText(event){
	let image = event.target.parentNode.querySelector('img'); // выбираем все изображения у родителя кнопки
	image.remove(); // удаляем изображения
	event.target.insertAdjacentHTML("beforebegin", "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, atque?</p>"); // вставляем перед кнопкой текст
}

