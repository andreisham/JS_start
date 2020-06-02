'use strict';

const productAddLinks = document.querySelectorAll('.product__add_link');

const productCart = document.querySelector('.drop__cart');

const checkout = document.querySelector('.cart__checkout');


let productItem = "";

productAddLinks.forEach((productAddLink) => {
	productAddLink.addEventListener('click', function (event) {
		event.preventDefault();
		const productImage = event.target.parentNode.parentNode.querySelector('.product__img img');
		const productName = event.target.parentNode.parentNode.querySelector('.product__name');
		const productPrice = event.target.parentNode.parentNode.querySelector('.product__price');
		// console.dir(productPrice);


		productItem = getProductItem(productImage.getAttribute("src"), productName.text, productPrice.innerText);

		productCart.insertAdjacentHTML('afterbegin', productItem);
		let deleleIcons = document.querySelectorAll('.cart__del');
		deleleIcons.forEach((deleteIcon) => {
			deleteIcon.addEventListener('click', function (event) {
				event.preventDefault();
				productCart.removeChild(event.target.parentNode.parentNode);
			});
		});


	});
});




/**
 * вставка разметки товара в корзину
 * @param {*string} image путь до картинки 
	@param {*string} product_name имя продукта
 * @param {*string} price цена продукта
 */
function getProductItem(image, product_name, price) {
	return `<div class="drop__cart__product">
				<a class="cart__product__img shadow-drop-2-center" href="#"> <img class="cart__product__image" src="${image}" alt="${image}"></a>
				<div class="cart__description"> <a href="#" class="cart__product__name">${product_name}</a> 
				<img class="cart__product__stars" src="img/stars4.5.png" alt="stars">
				<p class="cart__product__price">1 <span>x</span> ${price}</p>
				</div> <a class="cart__del" href="#"><i class="fas fa-times-circle "></i></a>
			</div>`;
};