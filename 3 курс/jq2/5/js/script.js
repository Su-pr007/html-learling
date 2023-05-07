function startAnim(){
	$('#block1').animate({
		height: '300px',
		width: '600px',
	}, 5000);
	$('#block2').animate({
		height: '150px',
		width: '150px',
	}, 5000)
}
function stopAnim(){
	$('#block1, #block2').stop();
}