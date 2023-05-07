$(document).ready(init);
function init(){
	$('.block').draggable()
	$('#lotok').droppable({
		accept: '.block',
		greedy: true,
	})
}
(function($){
	$.fn.delete = function(){
		this.remove();
	}
})(jQuery);