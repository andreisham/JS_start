'use strict';
class TicTakToe  {
	constructor() {
		this.gameTableElement = document.getElementById('game');
		this.status = "playing";
		this.mapValues = [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		];
		this.phase = "X";
	}
	
	/**
	* Инициализация игры
	*/
	init() {
		// выводим все ячейки
		this.renderMap();
		// инициализируем обработчики событий
		this.initEventHandlers();
	}
	/**
	 * вывод ячеек в html
	 */
	renderMap() {
		for (let row = 0; row < 3; row++) {
			const tr = document.createElement('tr');
			this.gameTableElement.appendChild(tr);
			for (let col = 0; col < 3; col++) {
				let td = document.createElement('td');
				td.dataset.row = row.toString();
				td.dataset.col = col.toString();
				tr.appendChild(td);
			}
		}
	}

	/**
	 * инициализация обработчиков событий
	 */
	initEventHandlers() {
		// ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler
		this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
	}

	/**
	 * обработчик события клика
	 * @param {MouseEvent} event 
	 */
	cellClickHandler (event) {
		
		if (!this.isCorrectClick(event)) {
			return;
		}
		// заполняем ячейку
		this.fillCell(event);
		// если кто то выйграл то заходим в if
		if (this.hasWon()) {
			// останавливаем игру
			this.setStatusStopped();
			// сообщаем о победе
			this.sayWonPhrase();
		}
		// меняем фигуру крестик или нолик
		this.togglePhase();
	}


	/**
	 * проверка был ли корректный клик, что описан в событии event
	 * @param {Event} event 
	 * @returns {boolean} Вернет true в случае если статус игры "играем", клик что описан в объекте event был
	 * по ячейке и ячейка куда был произведен клик пустая
	 */
	isCorrectClick (event) {
		return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
	}




	isStatusPlaying() {
		return this.status === "playing";
	}


	/**
	 * проврка что клик был по ячейке
	 * @param {event} event
	 * @returns {boolean} Вернет true если клик был по ячейке 
	 */
	isClickByCell(event) {
		return event.target.tagName === 'TD';
	}


	/**
	 * Проверка что в ячейку не ставили значение (крестик или нолик)
	 * @param {event} event 
	 * @returns {boolean} Вернет true если ячека пуста
	 */
	isCellEmpty(event) {
		// получаем строку и колонку куда кликнули
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;

		return this.mapValues[row][col] === '';
	}


	/**
	 * заполняет ячейку в которую кликнули
	 * @param {event} event 
	 */
	fillCell(event) {
		// получаем строку и колонку куда кликнули
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;

		// заполняем ячейку и ставим значение в массиве
		this.mapValues[row][col] = this.phase;
		event.target.textContent = this.phase;
	}

	/**
	 * проверка есть ли выйгрышная ситуация на карте
	 * @returns {boolean} Вернет true если игра выйграна
	 */
	hasWon(){
		return this.isLineWon({ x: 0, y: 0}, { x: 1, y: 0}, { x: 2, y: 0}) ||
			this.isLineWon({ x: 0, y: 1}, { x: 1, y: 1}, { x: 2, y: 1}) ||
			this.isLineWon({ x: 0, y: 2}, { x: 1, y: 2}, { x: 2, y: 2}) ||

			this.isLineWon({ x: 0, y: 0}, { x: 0, y: 1}, { x: 0, y: 2}) ||
			this.isLineWon({ x: 1, y: 0}, { x: 1, y: 1}, { x: 1, y: 2}) ||
			this.isLineWon({ x: 2, y: 0}, { x: 2, y: 1}, { x: 2, y: 2}) ||

			this.isLineWon({ x: 0, y: 0}, { x: 1, y: 1}, { x: 2, y: 2}) ||
			this.isLineWon({ x: 0, y: 2}, { x: 1, y: 1}, { x: 2, y: 0});
	}

	/**
	 * 
	 * @param {{ x: int, y: int}} a 1-ая ячейка
	 * @param {{ x: int, y: int}} b 2-ая ячейка 
	 * @param {{ x: int, y: int}} c 3-ая ячейка
	 * @returns {boolean} Вернет true если линия выйграна
	 */
	isLineWon(a, b, c){
		let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
		return value === 'XXX' || value === '000';
	}

	/**
	 * ставит статус игры "остановлена"
	 */
	setStatusStopped(){
		this.status = 'stopped';
	}

	/**
	 * сообщает о победе
	 */
	sayWonPhrase(){
		let figure = true.phase === 'X' ?  'Крестики' : 'Нолики';
		alert(`${figure} выйграли!`);
	}

	/**
	 * меняем игрока
	 */
	togglePhase(){
		this.phase = this.phase === 'X' ? '0' : 'X';
	}
}

// запуск игры при загрузке
window.addEventListener('load', () => {
	const ticTakToe = new TicTakToe();

	ticTakToe.init();
}); 