function changeColor(){
	$('table tr:even td').css('background', 'lightgrey');
	$('table tr:odd td').css('background', 'blue');
	$('table tr:gt(2) td').css('color', '#ff0')
}