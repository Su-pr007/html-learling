'use strict'
function ex1(){
	'0' ? alert('Привет') : alert();
}
function ex2(){
	prompt('"Официальное" название JavaScript?', '')=='EcmaScript' ? alert('Правильно!') : alert('Не знаете? EcmaScript!');
}
function ex3(){
	let number = prompt('Ваше число', '');
	number=='0' ? alert('0') : number > '0' ? alert('1') : alert('-1');
}
function ex4(){
	let result;
	let a=+prompt('a:', ''); 
	let b=+prompt('b:', '');
	(a + b < 4) ? result = 'Мало' : result = 'Много';
	alert(result);
}
function ex5(){
	let message;
	let login = prompt('Логин', '');
	(login == 'Сотрудник') ? message = 'Привет' :
	(login=='Директор') ? message = 'Здравствуйте, царь' :
	(login == '') ? message = 'Нет логина' :
	message='';
	alert(message);
}