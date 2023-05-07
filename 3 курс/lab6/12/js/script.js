'use strict'
elem.onclick = foo1;

elem.addEventListener('click', foo1, false);
elem.addEventListener('click', foo2, false);
elem.addEventListener('click', foo3, false);

elem.removeEventListener('click', foo1, false);

function foo1(){
	alert(1);
};
function foo2(){
	alert(2);
};
function foo3(){
	alert(3);
};