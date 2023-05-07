'use strict'
$('#les10_ex1').draggable({
	cursor: 'move',
	containment: 'parent',
	distance: 50,
})
$('#les10_ex2').draggable({
	axis: 'x',
	cursor: 'e-resize',
})
$('#les10_ex3').draggable({
	axis: 'y',
	cursor: 'n-resize',
})
$('#a1').draggable({
	handle: 'span',
	revert: true,
	revertDuration: 1000,
})