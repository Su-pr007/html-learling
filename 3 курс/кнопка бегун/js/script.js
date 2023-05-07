'use strict'
let x=0;
let y=0;
document.querySelector('#button-runner').onmouseover=move;
function move(){
	x=Math.round(Math.random()*100);
	y=Math.round(Math.random()*100);
	document.querySelector('#button-runner').style='top: '+x+'%; left: '+y+'%;';
}
function wasClicked(){
	alert('Тебе не отнять мою свободу');
	document.children[0].remove();
}