'use strict'
// 1)
let user={};
console.log(user);
user.name='John';
console.log(user);
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);
// ===================================
// 2)
function ex2(){
	let i;
	function asd(obj){
		let q;
		for(i in obj){
			q=i;
		}
		return q;
	}
	function isEmpty(obj){
		if(asd(obj)==undefined) return true;
		else return false;
	}
	let schedule = {
		asd: '1',
	};
	alert(isEmpty(schedule));
}
// ===================================
// 3)
function ex3(){
	const user1 = {
		name: 'Sasha',
	}
	user1.name = 'Vasya';
	console.log(user1);
	const checkConst = 3;
	try{
		alert(checkConst = 2);
	}
	catch(err){
		alert('error');
	}
}
// =========================
// 4)
function ex4(){
	let i;
	let salaries = {
		John: 100,
		Ann: 160,
		Pete: 130,
		Ya: 150,
	};
	let sum = 0;
	for(i in salaries){
		sum+=salaries[i];
	}
	alert(sum);
}
// =========================
// 5)
let i;
function multiplyNumeric(obj){
	for(i in obj){
		if(typeof(obj[i])=='number'){
			obj[i]*=2;
		}
	}
}
let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};
function ex5(){	
	multiplyNumeric(menu);
	console.log(menu);
}