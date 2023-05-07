'use strict'
function ex1(){
	alert( null || 2 || undefined);
}
function ex2(){
	alert(alert(1) || 2 || alert(3));
}
function ex3(){
	alert(1 && null && 2);
}
function ex4(){
	alert(alert(1) && alert(2));
}
function ex5(){
	alert(null || 2 && 3 || 4);
}
function ex6(){
	let age = prompt('age:', '');
	(age>=14 && age<=90) ? alert('1') : alert();
}
function ex7(){
	let age = prompt('age:', '');
	!(age>=14 && age<=90) ? alert('1') : alert();
}

function ex71(){
	let age = prompt('age:', '');
	(age<=14 || age>=90) ? alert('1') : alert();
}
function ex8(){
	if (-1 || 0) alert('first');
	if (-1 && 0) alert('second');
	if (null || -1 && 1) alert('third');
}
function ex9(){
	let login = prompt('Введите логин:', '');
	if(login=='Админ'){
		let password = prompt('Введите пароль', '');
		if(password=='Я главный'){
			alert('Здравствуйте');
		}
		else if(password){
			alert('Неверный пароль');
		}
		else{
			alert('Отменено');
		}
	}
	else if(login){
		alert("I don't know you");
	}
	else{
		alert('Отменено');
	}
}
function ex10(){
	let login = prompt('Введите логин:', '');
	login=='Админ' ? loginAdm() : (login==null || login=="") ? alert('Отменено') : alert("I don't know you");
}
function loginAdm(){
	let password = prompt('Введите пароль', '');
		password=='Я главный' ? alert('Здравствуйте') : (password==null || password=='') ? alert('Отменено') : alert('Неверный пароль');
}