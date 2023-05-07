'use strict'
function camelize(str){
	if(str==''){
		str=['background', 'color'];
	}
	else{
		str=str.split('-');		
	}
	for(let i in str){
		if(i!=0){
			str[i]=str[i].split('');
			str[i][0]=str[i][0].toUpperCase();
			str[i]=str[i].join('');
		}
	}
	str=str.join('');
	document.querySelector('#span1').innerHTML=str;
}
function ex2(){
	let arr=[5, 3, 8, 1];
	let filtered = filterRange(arr, 1, 4);
	console.log('№2: '+filtered);
	console.log('arr: '+arr);
}
function filterRange(array, a, b){
	let c = [];
	for(let i of array){
		if(i>=a && i<=b){
			c.push(i);
		}
	}
	return c;
}



// =================================================
function ex3(){
	let arr=[5, 3, 8, 1];
	arr=filterRangeInPlace(arr, 1, 4);
	console.log(arr);
}
function filterRangeInPlace(array, a, b){
	return array.filter(q=>q>=a&&q<b);
}
function ex4(){
	let arr=[5, 2, 1, -10, 8];
	arr.sort((a, b)=>{
		if(a>b) return -1;
		if(a==b) return 0;
		if(a<b) return 1;
	})
	console.log(arr);
}
function ex5(){
	let arr=['HTML', 'JavaScript', 'CSS'];
	let sorted = copySorted(arr);
	console.log(arr);
	console.log(sorted);
}
function copySorted(arr){
	let sorted = [];
	Object.assign(sorted, arr);
	return sorted.sort();
}
// ВМЕСТО ШЕСТОЙ. ШЕСТАЯ В КОНЦЕ
function ex6(){
let num1 = [2, 6, 3, 4, 1, 1];
let num2 = [5, 3, 8, 1, 7];
let num3 = [];
let num4 = [];
for(let i of num1){
	for(let j of num2){
		if(i==j && !(num3.includes(i))){
			num3.push(i);
		}
	}
}
for(let i of num1.concat(num2)){
	if(!(num3.includes(i))){
		num4.push(i);
}
}
console.log(num3);
console.log(num4);
}
function ex7(){
	let vasya={name: 'Вася', age: 25,};
	let petya={name: 'Петя', age: 30,};
	let masha={name: 'Маша', age: 28,};
	let users = [vasya, petya, masha];
	let names = [];
	for(let i of users){
		names.push(i.name);
	}
	for(let i of names){
		console.log(i)
	}
}
function ex8(){
	let vasya = {name: 'Вася', surname: 'Пупкин', id:1,};
	let petya = {name: 'Петя', surname: 'Иванов', id:2,};
	let masha = {name: 'Маша', surname: 'Петрова', id:3,};
	let users = [vasya, petya, masha];
	let usersMapped = [];
	for(let i of users){
		let a={};
		a.fullName = i.name+' '+i.surname;
		a.id = i.id;
		usersMapped.push(a);
	}
	console.log(usersMapped)
}
function ex9(){
	let vasya={name: 'Вася', age: 25,};
	let petya={name: 'Петя', age: 30,};
	let masha={name: 'Маша', age: 28,};
	let arr = [vasya, petya, masha];
	sortByAge(arr);
	console.log(arr[0].name);
	console.log(arr[1].name);
	console.log(arr[2].name);
	console.log(arr);
}
function sortByAge(arr){
	arr.sort((a, b)=>a.age > b.age? 1: -1);
}
function ex10(){
	let arr=[1, 2, 3];
	shuffle(arr);
	console.log('shuffle1: '+arr);
	shuffle(arr);
	console.log('shuffle1: '+arr);
	shuffle(arr);
	console.log('shuffle1: '+arr);
	shuffle2(arr);
	console.log('shuffle2: '+arr);
	shuffle2(arr);
	console.log('shuffle2: '+arr);
	shuffle2(arr);
	console.log('shuffle2: '+arr);
}
function shuffle(arr){
	arr.sort(()=>Math.random()-0.5);
}
function shuffle2(arr){
	for(let i = arr.length-1;i>0;i--){
		let j = Math.floor(Math.random() * (i+1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}
function ex11(){
	let vasya={name: 'Вася', age: 25,};
	let petya={name: 'Петя', age: 30,};
	let masha={name: 'Маша', age: 29,};
	let arr=[vasya, petya, masha];
	console.log(getAverageAge(arr));
}
function getAverageAge(arr){
	let sum=0;
	arr.forEach((a)=>sum+=a.age);
	return Math.floor(sum/arr.length);
}
function ex12(){
	let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
	console.log(unique(strings));
}
function unique(arr){
	let arr2=[];
	arr.forEach(a=>{if(!arr2.includes(a)) arr2.push(a)});
	return arr2;
}
// "ШЕСТАЯ"
function Calculator(){
	this.methods = {
		'-':(a, b) => a - b,
		'+':(a, b) => a + b,
	};

	this.calculate = str=>{
		let split = str.split(' ');
		let a=+split[0];
		let op=split[1];
		let b=+split[2];

		if(!this.methods[op] || isNaN(a) || isNaN(b)){
			return NaN;
		}

		return this.methods[op](a, b);
	}
	this.addMethod=(name, func)=>{
		this.methods[name]=func;
	}
}