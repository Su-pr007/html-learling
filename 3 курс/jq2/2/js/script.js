'use strict'
$(document).ready(init);
function init(){
	$('#sel1').bind('change', change);
	change();
}
function change(){
	let x = $('#sel1').val();
	switch(x){
		case '1':
			$('.desc').text('Первый урок по jQuery знакомит с основными понятиями и возможностями этой библиотеки.');
			$('.desc').append('<input type="button" value="test" id="button1">');
			$('#button1').one('click', openWindow);
			break;
		case '2':
			$('.desc').text('Второй урок по jQuery знакомит с таким понятием, как селекторы.');
			$('.desc').append('<input type="button" value="test" id="button2"><input type="text" id="text1">');
			$('#text1').focus(function(){console.log('focused')});
			$('#text1').blur(function(){console.log('blured')});
			$('#button2').one('click', openWindow);
			break;
		case '3':
			$('.desc').text("Третий урок по jQuery знакомит с таким понятием, как фильтры");
			$('.desc').append('<input type="button" value="test" id="button3">');
			$('#button3').one('click', openWindow);
			break;
	}
}
function openWindow(){
	document.open('firstq.html', 'firstq', 'width=750 height=320');
}