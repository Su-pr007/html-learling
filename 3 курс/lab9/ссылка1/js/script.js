'use strict'
let initial = document.forms[0].iznachDep.value; // Первоначальный депозит
let interest = document.forms[0].yearStavka.value / 100;; // Проценты
let years = document.forms[0].vklad.value / 12; // Сколько лет ждать
let result = 0;
let heightRed = initial/100;
let heightGreen = result/100;
function check(){
	initial = document.forms[0].iznachDep.value;
	interest = document.forms[0].yearStavka.value / 100;
	years = document.forms[0].vklad.value / 12;
	result = Math.round(initial * (1 + interest * years));
	heightRed = initial/100;
	heightGreen = result/100;
	if (interest!='' && initial!=''){
		document.querySelector('#was').innerHTML = 'Было: <br>' + initial;
		document.querySelector('#became').innerHTML = 'Станет: <br>' + result;
		document.forms[0].iznachDep.setAttribute('oninput', 'check()');
		document.forms[0].yearStavka.setAttribute('oninput', 'check()');
		document.querySelector('#blocks').innerHTML = '<div id="red"></div><div id="green"></div>';
		document.querySelector('#red').style.height = heightRed + 'px';
		document.querySelector('#green').style.height = heightGreen + 'px';
	}
}