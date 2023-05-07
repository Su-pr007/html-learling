'use strict'
let obj = {
	name: [],
	family: [],
};
function add(){
	let name = prompt('Имя:', '');
	let family = prompt('Фамилия', '')
	if(name&&family){
		obj.name.push(name);
		obj.family.push(family);
	}
}
function check(){
	let x='';
	for(let i in obj['name']){
			x+=obj['name'][i]+' '+obj['family'][i];
			if(i!=obj['name'].length-1){
				x+=',\n';
			}
			else{
				x+='.'
			}
		}
	document.querySelector('#textarea1').value = x;
}