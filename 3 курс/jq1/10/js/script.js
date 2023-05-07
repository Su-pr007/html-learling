'use strict'
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