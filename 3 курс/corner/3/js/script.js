'use strict'
$(document).ready(init);
function init(){
	$('#fray').corner('fray 10px').parent().corner('fray 10px');
	$('#tear').corner('tear 20px').parent().corner('tear 20px');
	$('#notch').corner('notch 4px').parent().css('padding', '4px').corner('notch 4px');
	$('#notchBold').corner('notch 10px').parent().css('padding', '12px').corner('notch 10px');
	$('#sharp').corner('sharp 10px').parent().css('padding', '8px').corner('sharp 10px');
	$('#cool').corner('cool 20px').parent().css('padding', '10px').corner('cool 10px');
	$('#biteRound').corner('round 20px').parent().css('padding', '8px').corner('bite 10px');
	$('#round1').corner('round 8px').parent().css({'padding': '4px', 'margin': '20px'}).corner('round 10px')
	$('#round2').corner('round 8px').parent().css('padding', '8px').corner('round 14px');
	$('#round3').corner('round 14px').parent().css('padding', '15px').corner('round 14px');
	$('#roundBite2');
	$('#bevel1').corner('bevel 8px').parent().css('padding', '5px').corner('bevel 10px');
	$('#bevel2').corner('bevel 8px').parent().css('padding', '10px').corner('bevel 14px');
	$('#bite1').corner('bite 10px').parent().css('padding', '8px').corner('bite 10px');
	$('#bite2').corner('bite 20px').parent().css('padding', '15px').corner('bite 20px');

	$('#roundBite').corner('bite 15px').parent().css('padding', '8px').corner('round 10px');
	$('#frayTear').corner('tear 20px').parent().css({'padding': '8px', 'margin':'20px',}).corner('fray 10px');
	$('#jutSculpt').corner('sculpt 20px').parent().css('padding', '8px').corner('jut 10px');
	$('#bevelNotch').corner('notch 20px').parent().css('padding', '8px').corner('bevel 15px');
	$('#notchBite').corner('bite 15px').parent().css('padding', '10px').corner('notch 10px');
}