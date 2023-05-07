'use strict'
document.querySelector('#time3').value = new Date(Date.now()+60000).toUTCString().slice(17, 22);
document.querySelector('#date3').value = new Date(Date.now()).toISOString().slice(0, 10);
let cookedBox = setInterval(()=>{
	document.querySelector('#cookedBox').innerHTML = "Всего как: " + document.cookie.split(';').length + '\n' + document.cookie;
}, 1000);
function setCookie(name, value, options = {}){
	options ={
		path: '/',
		...options
	};
	if(options.expires){
		options.expires = options.expires.toUTCString();
	}
	let  updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	for(let optionKey in options){
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if(optionValue !==true){
			updatedCookie += "=" + optionValue;
		}
	}
	document.cookie = updatedCookie;
}
function deleteCookie(name){
	setCookie(name, '', {
		'max-age': -1
	})
}
function addCookie5s(){
	document.cookie = document.querySelector('#name2').value + '=' + document.querySelector('#value2').value + '; max-age=5;';
	var div = document.querySelector('#sec5Box');
	div.innerHTML = document.cookie;
	var i=0;
	var Interval5s = setInterval(()=>{
		div.innerHTML = document.cookie;
		i++;
		if(i>=5) clearInterval(Interval5s);
	}, 1000)
}
function toDate(){
	var date = new Date(document.querySelector('#date3').value).toUTCString().slice(0, 17),
	time = document.querySelector('#time3').value;
	document.cookie = document.querySelector('#name3').value + '=' + document.querySelector('#value3').value + '; expires=' + date + time + ':00 UTC+3';
	console.log(document.querySelector('#name3').value + '=' + document.querySelector('#value3').value + '; expires=' + date + time + ':00 UTC+3');
}