'use strict'
function action1(){
	$('#years div').css('background', 'none');
	$('#years :checked')[0].parentNode.style='background-color: green';
	$('#years div :last-of-type').css('background', 'red');
	console.log("Вам лет - "+$('#years :checked')[0].value);
	console.log("Выбранная - "+$('#washere option:selected')[0].innerHTML);
	console.log('Следующая от выбранной - '+$('#washere option:selected+option')[0].innerHTML);
	$('input:disabled').toggle();
	console.log('Вам НЕ будет начислено - '+$('input[value="9999"]')[0].value);
}