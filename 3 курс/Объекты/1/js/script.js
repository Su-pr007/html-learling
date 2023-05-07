'use strict'
function ex1(){
	let fruits = ['Яблоки', 'Груша', 'Апельсин'];
	let shoppingCart = fruits;
	shoppingCart.push('Банан');
	console.log(fruits);
	alert(fruits.length);
}
function ex2(){
	let styles = ['Джаз', 'Блюз'];
	console.log(styles);
	styles.push('Рок-н-ролл');
	console.log(styles);
	styles[1] = 'Классика';
	console.log(styles);
	alert(styles.shift());
	console.log(styles);
	styles.unshift('Рэп', 'Рэгги')
	console.log(styles);
}
function ex3(){
	let arr = ['a', 'b'];
	arr.push(function(){
		alert(this);
	})
	arr[2]();
}
function sumInput(){
	let numbers=[];
	let sum=0;
	let a=1;
	while(a || a==0){
		a = +prompt('Число:', '');
		numbers.push(a);
	}
	for(let q of numbers){
		if(Boolean(q) || q==0){
			sum+=+q;
		}
	}
	alert(sum);
}
function getMaxSubSum(arr){
	arr = arr.split(',');
	let max=0;
	let slice = [];
	let sum=0;
	for(let i in arr){
		for(let j=i; j<arr.length+1;j++){
			slice = arr.slice(i, j);
			sum=0;
			console.log(slice);
			for(let q of slice){
				sum+=+q;
			}
			if(sum>max){
				max=sum;
			}
		}
	}
	console.log(max);
	alert(max);
}