let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";
button1.onclick = function(){
	alert(typeof(str))
};
button2.onclick = function(){
	alert(typeof(num))
};
button3.onclick = function(){
	alert(typeof(flag))
};
button4.onclick = function(){
	alert(typeof(txt))
};
//--------------------
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 ** 3;
// -------------------
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + "3";
let a9 = "5" - 3;
let a10 = 75 + "кг";
// -------------------
let height = 23;
let width = 10;
let s = height * width;
button5.onclick = function(){
	alert(s)
};
// -------------------
let heightC = 10;
let dC = 4;
let v = 3.14 * ((dC / 2) ** 2) * heightC;
button6.onclick = function(){
	alert(v)
};
// -------------------
let n = 3;
let m = 4;
let k = ((n ** 2) + (m ** 2)) ** (1 / 2);
button7.onclick = function(){
	alert(k)
};
// -------------------
let secondsInHour = 60 * 60;
button8.onclick = function(){
	alert(secondsInHour)
};
// -------------------
let secondsInDay = secondsInHour * 24;
button9.onclick = function(){
	alert(secondsInDay)
};
// --------------------
var num1 = 1;
button10.onclick = function(){
	alert(num1 + 12)
};
button11.onclick = function(){
	alert(num1 - 14)
};
button12.onclick = function(){
	alert(num1 * 5)
};
button13.onclick = function(){
	alert(num1 / 7)
};
button14.onclick = function(){
	alert(num1 + 1)
};
button15.onclick = function(){
	alert(num1 - 1)
};
// ---------------------
let num2 = 3;
button16.onclick = function(){
	alert(num2)
};
// ---------------------
let a11 = 10;
let b11 = 2;
button17.onclick = function(){
	alert(a11 + b11)
};
button18.onclick = function(){
	alert(a11 - b11)
};
button19.onclick = function(){
	alert(a11 * b11)
};
button20.onclick = function(){
	alert(a11 / b11)
};
// ----------------------
let c11 = 15;
let d11 = 2;
let result = c11 + d11;
button21.onclick = function(){
	alert(result)
};
// ----------------------
let a12 = 10;
let b12 = 2;
let c12 = 5;
button22.onclick = function(){
	alert(a12 + b12 + c12)
};
// ----------------------
let a13 = 17;
let b13 = 10;
let c13 = a13 - b13;
let d13 = 7;
let result13 = c13 + d13;
button23.onclick = function(){
	alert(result13)
};
// -----------------------
let x = 3;
button24.onclick = function(){
	alert(x ** 2)
};
// -----------------------
let age = 17;
button25.onclick = function(){
alert(`Мне ${age} лет`)
};
// -----------------------
let name = 'Васян';
button26.onclick = function(){
alert(`Дарова, ${name}`)
};
// -----------------------
let str2 = 'Привет, Мир!';
button27.onclick = function(){
alert(str2)
};
// -----------------------
let str32 = 'Привет, ';
let str42 = 'Мир!';
button28.onclick = function(){
alert(str32 + str42)
};





document.write("Скрипт завершен")