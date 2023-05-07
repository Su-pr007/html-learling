function hideDiv(){
	$('#block1').hide(500);
}
function showDiv(){
	$('#block1').show(500);
}
function toggleDiv(){
	$('#block1').slideToggle(7000);
}
$(document).ready(hideDiv);
let asd=0;
function opacity(){
	if(asd){
		$('#block2').fadeIn(1000);
		asd=0;
	}
	else{
		$('#block2').fadeOut(1000);
		asd=1;
	}
}