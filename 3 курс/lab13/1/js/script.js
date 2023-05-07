'use strict'
let array = [];
let x = '';
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let time = setInterval(()=>{
	x='';
	array=[];
	let curDate = new Date()
	array.push(curDate.getFullYear());
	array.push(curDate.getMonth()+1);
	array.push(curDate.getDate());
	array.push(curDate.getHours());
	array.push(curDate.getMinutes());
	array.push(curDate.getSeconds());
	for (let i=0; i<array.length;i++){
		if(i==1){
			x+=months[array[i]-1]+'.';
			continue;
		}
		if(i<2){
			x+=array[i]+'.';
			continue;
		}
		if(i==2){
			x+=array[i]+' ';
			continue;
		}
		if(i>2 && i<array.length-1){
			x+=array[i]+':';
			continue;
		}
		if(i==array.length-1){
			x+=array[i];
			continue;
		}
	}
	document.querySelector('#time').innerHTML = x;
}, 1000);