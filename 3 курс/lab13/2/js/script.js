'use strict'
mneDays();
function mneDays(){
	let year = +prompt('Год рождения', '2001');
	let month = +prompt('Номер месяца рождения', '12') - 1;
	let day = +prompt('День рождения', '28');
	let yaRodilsya = new Date(year, month, day);
	let mneDney = Math.floor((new Date() - yaRodilsya) / 8640e4);
	document.querySelector('span').innerHTML = ('Вам ' + mneDney + ' дней');
	console.log('Вам ' + mneDney + ' дней');
}