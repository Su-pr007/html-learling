'use strict'
$(document).ready(function(){$('#inpChess').hide()})
function addTable(){
	$('body').append('<div class="container"></div>');
	for (let i=0;i<8;i++){
		for (let j=0;j<8;j++){
			if((i-j)%2){
				$('.container').append('<div class="cell white"></div>');
			}
			else{
				$('.container').append('<div class="cell black"></div>');
			}
		}
	}
	$('.cell').wrapAll('<div class="border"></div>');
	$('#inpTable').hide();
	$('#inpChess').show();
}
function addImg(){
	let dark='<img src="img/shashochka.gif"></img>';
	let light='<img src="img/shashochka2.gif"></img>';
	$('div').filter('.black').slice(0, 12).append(light);
	$('div').filter('.black').slice(20, 32).append(dark);
	$('#inpChess').hide();
}