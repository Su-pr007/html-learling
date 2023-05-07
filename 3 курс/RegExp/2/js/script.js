'use strict'
$(document).ready(init)
function init(){
	let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
	let regexp = /#\d{3}(\d{3})?/g
	console.log(str.match(/#[\da-fA-F]{3}\b/g).concat(str.match(/#[\da-fA-F]{6}\b/g)))


	// =====================


$('.block1').on('click', function(){
	if($('.block2').css('backgroundColor')=='rgb(153, 153, 0)') $('.block2').css('backgroundColor', '#099')
else $('.block2').css('backgroundColor', '#990')});

setInterval(function(){if($('.block2').css('backgroundColor')=='rgb(153, 153, 0)'){
  $('.block2').css('backgroundColor', '#099')}}, 5000)
}