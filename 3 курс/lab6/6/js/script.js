'use strict'
function handler(){
	alert('Спасибо!')
}
elem.addEventListener('click', handler);
elem.removeEventListener('click', handler);
elem.onclick = () => alert('Привет')