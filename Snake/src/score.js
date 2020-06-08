class Score{
	constructor(){
		this.currentEl = document.querySelector('.current');
		this.toWinEl = document.querySelector('.toWin');
	}

	init(settings){
		this.settings = settings;
	}

	setToWin(text){
		this.toWinEl.textContent = text;
	}

	setCurrent(text){
		this.currentEl.textContent = text;
	}
}