'use strict'
$('div').hover(hOver, hOut);
function hOver(){
	$(this).css('background', 'blue');
}
function hOut(){
	$(this).css('background', 'white');
}