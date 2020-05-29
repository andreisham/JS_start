"use strict";

// пункт 1 ====================================================================================================================================

class NumberSplit {
	constructor(units, tens, hundreds){
		this.units = units; //это единицы
		this.tens = tens; //это десятки
		this.hundreds = hundreds; //это сотни
	}
	numberToSplit(number){
		if	(number < 0 || number > 999){
			alert('Введите число от 0 до 999!!!!!!');
			console.log(numberSplited);
			return;
		} else if (isNaN(number) == true || Number.isInteger(number) == false) {
			alert('Нужно ввести целое число');
			console.log(numberSplited);
			return;
		} else {
			console.log(number);
		} 
		this.units = (number % 10); // это единицы
		this.tens = Math.floor((number % 100) / 10); // это десятки 
		this.hundreds = Math.floor(number / 100);  // это сотни
	}
}

let number = +prompt('Введите целое число от 0 до 999:');
let units = 0;
let tens = 0;
let hundreds = 0;

const numberSplited = new NumberSplit(units, tens, hundreds); // создание нового объекта с обнуленными свойствами
numberSplited.numberToSplit(number); //вызов функции для разделения числа
console.log(numberSplited);

// пункт 1.1 ====================================================================================================================================
// создаем конструктор Product в стиле es5
function Product(name, price) {
	this.name = name;
	this.price = price;	
}

Product.prototype.make25PercentDiscount = function () {
	this.price -= this.price * 0.25;
}

// конструктор Product в стиле es6
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	make25PercentDiscount() {
		this.price -= this.price * 0.25;
	}
}

const product_1 = new Product('PC', '1000');
console.log(product_1.name);
console.log(product_1.price);
product_1.make25PercentDiscount();
console.log(product_1.price);

const product_2 = new Product('Phone', '500');
console.log(product_2.name);
console.log(product_2.price);
product_2.make25PercentDiscount();
console.log(product_2.price);

// пункт 1.2 ====================================================================================================================================
// создаем конструктор Post в стиле es5
function Post(author, text, date) {
	this.author = author;
	this.text = text;	
	this.date = date;	
}

Post.prototype.edit = function () {
	this.text = prompt('Добавьте текст:');
}

// конструктор Post в стиле es6
class Post {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}
	edit() {
		this.text = prompt('Добавьте текст:');
	}
}

// создаем конструктор AttachedPost в стиле es5
function AttachedPost(author, text, date){
	Post.call(this, author, text, date);
	this.highlighted = false;
}
// наследуем методы с прототипа объекта Post
AttachedPost.prototype = Object.create(Post.prototype);

// указываем конструктор нового объекта
AttachedPost.prototype.constructor = AttachedPost;

// создаем новый метод для AttachedPost 
AttachedPost.prototype.makeTextHighlighted = function () {
	this.highlighted = true;
}

// конструктор Post в стиле es6
class AttachedPost extends Post {
	constructor(author, text, date) {
		super(author, text, date);
		this.highlighted = false;
	}
	// создаем новый метод для AttachedPost 
	makeTextHighlighted() {
		this.highlighted = true;
	}
}

const post_1 = new Post('Andrew', 'Simple text', '21.05.2020');
console.log(post_1);
post_1.edit();
console.log(post_1.text);

const attachedPost_1 = new AttachedPost('Denis', 'Very Simple text', '20.05.2020');
console.log(attachedPost_1);
attachedPost_1.edit();
attachedPost_1.makeTextHighlighted();
console.log(attachedPost_1);
