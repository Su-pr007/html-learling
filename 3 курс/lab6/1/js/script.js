'use strict'
class Menu{
	handleEvent(event){
		let method = 'on' + event.type[0].toUpperCase()+event.type.slice(1);
		this[method](event);
	}
	
	onMousedown(){
		elem.innerHTML +=' Кнопка мыши нажата';
	}
	onMouseup(){
		elem.innerHTML +='...и отжата.';
	}
}
let menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);
