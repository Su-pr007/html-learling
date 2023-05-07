'use strict'
elem.onclick = function(event){
	alert(event.type + ' на ' + event.currentTarget);
	alert('Координаты: ' + event.clientX + ':' + event.clientY);
}