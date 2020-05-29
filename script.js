'use strict';

// пункт 2 ====================================================================================================================================
let numbers = [];

for (let i = 0; i <= 10; i++) {
	if (i == 0) {
		numbers.push(i + ' - это ноль')
	} else if (i % 2 == 0) {
		numbers.push(i + ' - четное число')
	} else if (i % 2 != 0) {
		numbers.push(i + ' - нечетное число')
	}
}
console.log(numbers);

// пункт 3 ====================================================================================================================================
const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
// пункт 4 ====================================================================================================================================
const products = [{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

const discountPercent = 0.15; //размер скидки

products.forEach(function sale(product) {
	product.price -= product.price * discountPercent;
});

console.log(products);

// пункт 5 ====================================================================================================================================
const products = [{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];

	//фильтр по наличию фотографий
	let prodWithPhoto = products.filter(function(product) {
		return  product.photos != undefined && product.photos[0] != undefined;
	});
	console.log(prodWithPhoto);

	//сортировка по возрастанию цены
	products.sort(function(a, b){
		return a.price - b.price;
	})
	console.log(products);

// пункт 6 ====================================================================================================================================
for(let i = 0; i < 10; console.log(i++));

// пункт 7 ====================================================================================================================================
let mounting = []; //создали пустой массив

for (let i = 0; i < 20; i++){
	mounting.push('x'); //добавляем в пустой массив крестики
	console.log(mounting.join('')); //выводим полученный массив каждую итерацию
}
