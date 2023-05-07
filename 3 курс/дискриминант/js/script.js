'use strict'
let a=0;
let b=0;
let c=0;
function diskr(){
	let result = document.querySelector('#result');
	a = +prompt('a:', '');
	b = +prompt('b:', '');
	c = +prompt('c:', '');
	if(a){
		let d = (b**2) - (4*a*c);
		if(d>0){
			let x1 = (-b+Math.sqrt(d))/(2*a);
			let x2 = (-b-Math.sqrt(d))/(2*a);
			result.innerHTML = 'x1 = ' + x1 + '<br> x2 = ' + x2;
		}
		else if(d==0){
			let x = (-b+Math.sqrt(d))/(2*a);
			result.innerHTML = 'x = ' + x;
		}
		else{
			let x1 = '(' + (-b) + ' + (' + Math.sqrt(Math.abs(d)) + ' * j) / '+ 2*a;
			let x2 = '(' + (-b) + ' - (' + Math.sqrt(Math.abs(d)) + ' * j) / '+ 2*a;
			result.innerHTML = x1 + '<br>' + x2;
		}
	}
	else if(a==0 && b!=0 && c!=0){
		let x = c/b;
		result.innerHTML = 'x = ' + x;
	}
	else{
		result.innerHTML = 'Непонятно'
	}
}
function bikvadr(){
	a = +prompt('a:', '');
	b = +prompt('b:', '');
	c = +prompt('c:', '');
	if(a){
		let d = (b**2) - (4*a*c);
		if(d>0){
			let y1 = (-b+Math.sqrt(d))/(2*a);
			let y2 = (-b-Math.sqrt(d))/(2*a);
			let x1 = '(' + y1 + ')^0.5';
			let x2 = '(' + y2 + ')^0.5';
			console.log(x1,x2);
			result.innerHTML = 'x1 = ' + x1 + '<br> x2 = ' + x2;
		}
		else if(d==0){
			let y = (-b+Math.sqrt(d))/(2*a);
			let x = '(' + y + ')^0.5';
			result.innerHTML = 'x = ' + x;
		}
		else{
			let y1 = '(' + (-b) + ' + (' + Math.sqrt(Math.abs(d)) + ' * j) / (2 * ' + a + ')';
			let y2 = '(' + (-b) + ' - (' + Math.sqrt(Math.abs(d)) + ' * j) / (2 * ' + a + ')';
			let x1 = '(' + y1 + ')^0.5';
			let x2 = '(' + y2 + ')^0.5';
			result.innerHTML = x1 + '<br>' + x2;
		}
	}
	else if(a==0 && b!=0 && c!=0){
		let y = -c/b;
		let x = '(' + y + ')^0.5';
		result.innerHTML = 'x = ' + x;
	}
	else{
		result.innerHTML = 'Непонятно';
	}
}