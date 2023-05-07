'use strict'
class Menu{
	handleEvent(event){
		switch(event.type){
			case 'mousedown':
				elem.innerHTML = ' Нажата кнопка мыши';
				break;
			case 'mouseup':
				elem.innerHTML += '...и отжата';
				break;
		}
	}
}
let menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);