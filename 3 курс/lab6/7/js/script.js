'use strict'
function counter(){
	var a = prompt('Кроликов:');
	for(let i=0;i<a;i++){
		alert('Кролик №' + (i+1));
	};
	alert('Кролики посчитаны, все на месте.');
};
elem.onclick = counter;