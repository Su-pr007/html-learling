'use strict'
$(document).ready(init);
function init(){
	let str='Завтрак в 09:00 в комнате 123:456';
	let regexp = /\b\d\d:\d\d\b/g;
	console.log(str.match(regexp));
	// ===================================================
	let str2 = 'Завтрак в 09:20. Ужин в 21-30';
	let regexp2 = /\b\d\d[:-]\d\d\b/g;
	console.log(str2.match(regexp2));
	// ===================================================
	let str3 = 'Привет!... Как дела?.....';
	let regexp3 = /\.{3,}/g;
	console.log(str3.match(regexp3));
	// ===================================================
	let str4 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
	let regexp4 = /#[a-zA-Z0-9]{6}\b/g;
	console.log(str4.match(regexp4));
	// ===================================================
	let str5 = '... <!-- My -- comment test --> .. <!----> ..';
	let regexp5 = /<!--[^>]{0,}?-->/g;
	console.log(str5.match(regexp5));
	// ===================================================
	let str6 = '<> <a href="/"> <input type="radio" checked> <b>';
	let regexp6 = /<[^>]+?>/g;
	console.log(str6.match(regexp6));
}