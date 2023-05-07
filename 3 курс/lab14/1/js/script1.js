'use strict'
let famil = sessionStorage.getItem('famil');
let name = sessionStorage.getItem('name');
let otch = sessionStorage.getItem('otchestvo');
let year = sessionStorage.getItem('year');
let bP = sessionStorage.getItem('birthPlace');
let likeTo = sessionStorage.getItem('likeTo');
let dontLikeTo = sessionStorage.getItem('dontlike');
document.querySelector('#textHere').innerHTML = 'Жил да был '+name+ ' по фамилии '+famil+' по батьке '+otch+'. Родилась эта штука в '+year+' году , то есть сейчас ему ~'+(new Date().getFullYear()-year)+' лет. Впервые было замечено в ужасном месте под названием '+bP+'. Оно любило '+likeTo+' и не любило '+dontLikeTo+'. В конце своей истории '+name+' умерло. Ну и ладно. Нам-то что?';