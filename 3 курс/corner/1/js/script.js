'use strict'
$(document).ready(init);
function init(){
	let array = ['round', 'bevel', 'notch', 'dog', 'dog2', 'bite', 'cool', 'sharp', 'slide', 'jut', 'curl', 'tear', 'fray', 'wicked', 'sculpt'];
	for(let i=0;i<14;i++){
		$('body').append('<div class="name"></div>');
		$('.name:last').corner(array[i]).before(array[i]).after('<hr>');
	}
	$('.name').draggable();
}