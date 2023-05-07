$(document).ready(function(){
	$('#abzac').click(function(){
		$('.img1').animate({
			opacity: 'toggle',
			left: '+=50',
			height: 'toggle',
		}, 5000, function(){
			$(this).after('<div>Анимация завершена</div>')
		})
	});
	$('#abzac2').click(function(){
		$('.img1').animate({
			width: ['toggle', 'swing'],
			height: ['toggle', 'swing'],
			opacity: 'toggle',
		}, 5000, 'linear', function(){
			$(this).after('<div>Анимация завершена</div>')
		})
	});
});