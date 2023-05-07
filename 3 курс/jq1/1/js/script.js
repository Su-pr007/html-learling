'use strict'
function addEffect1(){
	$('#kv1:hidden').show();
}
function addEffect2(){
	$('#kv2:hidden').slideDown('slow')
}
function addEffect3(){
	$('#kv3:hidden').show().animate({
		fontSize:'36px',
	}, 3000)
}
function h50perc(ff){
	$(ff).height($(ff).height()/2);
}
function umn2(ff){
	$(ff).height($(ff).height()*2);
}