'use strict';
hideModal();
let html = '';
let value = '';
let firstElem = document.getElementsByName("text")[0];
let lastElem = document.getElementsByName("cancel")[0];
function showPrompt(html, callback){
	document.querySelector('#prompt-form-container').style.display = "block";
	document.querySelector('#prompt-message').innerHTML = html;
	firstElem.select();
	document.addEventListener('keydown', key, false);
}
function callback(value){
	if(value!=''){
		alert('Вы ввели: ' + value);
		hideModal();
		return value;
	}
}
function hideModal(){
	document.querySelector('#prompt-form-container').style.display = 'none'
}
function key(f){
	if(f.key=='Escape'){
		callback(null);
	}
}
firstElem.onkeydown = (e)=>{
	if(e.key=='Tab' && e.shiftKey){
		lastElem.focus();
	}
}
lastElem.onkeydown = (e)=>{
	if(e.key=='Tab' && !e.shiftKey){
		firstElem.focus();
	}
}