'use strict';
input1.onclick = function(){
	let div1 = document.body.children[0];
	alert(div1);
}
input2.onclick = function(){
	let ul1 = document.body.children[0].nextElementSibling;
	alert(ul1);
}
input3.onclick = function(){
	let li2 = document.body.children[0].nextElementSibling.children[1];
	alert(li2);
}