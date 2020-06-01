'use strict';


const button = document.querySelector('button');
const submit = document.querySelector('[type="submit"]');
let modal = document.querySelector('.modal'); 

button.addEventListener('click',showModal);
submit.addEventListener('click',hideModal);

function showModal(){ // выводим модальное окно и скрываем кнопку
	
	modal.style.display = "block"; 
	button.style.display = "none";
}

function hideModal(){ // убираем модальное окно и выводим кнопку
	modal.style.display = "none";  
	button.style.display = "block";
}