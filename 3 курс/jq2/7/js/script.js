let k=1;
function horizont(arg){
	$('.block').animate({
					left: [arg, 'linear'],
				}, 'slow');
}
function vertical(arg){
	$('.block').animate({
					top: [arg, 'linear'],
				}, 'slow');
}
$('.button').click(function(){
	switch($(this).attr('value')){
		case '>':
			horizont('+=50');
			return
		case '<':
			horizont('-=50');
			return
		case 'v':
			vertical('+=50');
			return
		case '^':
			vertical('-=50');
			return
	}
})
document.onkeydown = function handle(e){
		if(e.keyCode === 37){
			horizont('-=50');
		}
		if(e.keyCode === 38){
			vertical('-=50');
		}
		if(e.keyCode === 39){
			horizont('+=50');
		}
		if(e.keyCode === 40){
			vertical('+=50');
		}
	}