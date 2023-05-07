$(document).ready(()=>{
	$('.right').on('click', ()=>{
		$('.cont2').css({
			right: +$('.cont2').css('right').slice(0, -2)+500+'px',
		})

	})
	$('.left').on('click', ()=>{
		$('.cont2').css('right', +$('.cont2').css('right').slice(0, -2)-500+'px')
	})
})