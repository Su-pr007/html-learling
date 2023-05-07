'use strict'
$(document).ready(init);
function init(){
	let array = ['round', 'bevel', 'notch', 'bite', 'cool', 'sharp', 'slide', 'jut', 'curl', 'tear', 'fray', 'wicked', 'sculpt', 'long', 'dog', 'dog2', 'dog3', 'dogfold', 'bevelfold', 'steep', 'invsteep'];
	for(let i=0;i<21;i++){
		$('.block:eq('+i+')').text(array[i]).corner(array[i]);
	}
	$('.block:eq(21)').corner('bottom').corner('top bevel');
	$('.block:eq(22)').corner('br top').corner('botch bl 20px')
	$('.block:eq(23)').corner('jut tl 20px').corner('dog tr 20px').corner('bite bl 15px').corner('notch br');
	$('.block:eq(24)').corner('bevel top');
	$('.block:eq(25)').corner('bite tl');
	$('.block:eq(26)').corner('bottom');
	$('.block:eq(27)').corner('notch left');
	$('.block:eq(28)').corner('dog tr');
	$('.block:eq(29)').corner('cool tl br');
	$('.block:eq(30)').corner('bevelfold right');
}