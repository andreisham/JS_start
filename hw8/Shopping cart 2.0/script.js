'use strict';

const productAddLinks = document.querySelectorAll('.product__add_link');

const productCart = document.querySelector('.drop__cart');

const product = document.querySelector('.product__box');
console.dir(product);


let productItem = "";
let sum = 0;
productAddLinks.forEach((productAddLink) => {
	productAddLink.addEventListener('click', function (event) {
		event.preventDefault();
		let productImage = event.target.parentNode.parentNode.querySelector('.product__img img');
		let productName = event.target.parentNode.parentNode.querySelector('.product__name');
		let productPrice = event.target.parentNode.parentNode.querySelector('.product__price');
		// let productNumber = event.target.parentNode.parentNode.querySelector('.product__price');
		// console.dir(productPrice);

		// добавляем товар в корзину
		// При клике на кнопку добавить в корзину иногда выскакивает ошибка ссылающаяся на эту строку:
		/*	Uncaught TypeError: Cannot read property 'getAttribute' of null
			at HTMLAnchorElement.<anonymous> (script.js:23)
			не могу понять почему она появляется, так как то все работает нормально то с ошибкой
			аналогично с удалением из корзины, то ошибка есть, то нет
		*/
		productItem = getProductItem(productImage.getAttribute("src"), productName.text, productPrice.innerText);

		productCart.insertAdjacentHTML('afterbegin', productItem);

		// считаем сумму корзины
		let productPriceTotal = document.querySelector('.total__price');
		
		sum += parseInt(productPrice.firstElementChild.textContent);
		productPriceTotal.textContent = sum;


		// удаляем товар из корзины
		let deleleIcons = document.querySelectorAll('.cart__del');
		deleleIcons.forEach((deleteIcon) => {
			deleteIcon.addEventListener('click', function (event) {
				event.preventDefault();
				productCart.removeChild(event.target.parentNode.parentNode);
				let cartProductPrice = event.target.parentNode.parentNode.getElementsByClassName('cart__product__price')[0]; 
				productPriceTotal.textContent -= parseInt(cartProductPrice.textContent);
			});
		});
	});
});




/**
 * вставка разметки товара в корзину
 * @param {string} image путь до картинки 
 * @param {string} product_name имя продукта
 * @param {string} number количество продуктов
 * @param {string} price цена продукта
 */
function getProductItem(image, product_name, number, price) {
	return `<div class="drop__cart__product" data-id="${number}">
				<a class="cart__product__img shadow-drop-2-center" href="#"> 
					<img class="cart__product__image" src="${image}" alt="${image}">
				</a>
				<div class="cart__description"> 
					<a href="#" class="cart__product__name">${product_name}</a> 
					<img class="cart__product__stars" src="img/stars4.5.png" alt="stars">
					<p class="cart__product__price"> ${number} <span>x</span> ${price}</p>
				</div> 
				<a class="cart__del" href="#">
					<i class="fas fa-times-circle "></i>
				</a>
			</div>
	`;
};