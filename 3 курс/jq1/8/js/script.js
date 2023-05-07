'use strict'
let scet=0;
function addBlock(){
	$('.redBlock').append('<div class="yellowBlock"></div>');
	scet++;
	if(scet==5){
		$('.redBlock, input').wrapAll('<div class="wrapper"></div>')
	}
	if(scet==6){
		$('input').css('font-weight', 'bold')
	}
}