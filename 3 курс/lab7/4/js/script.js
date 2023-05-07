let div_progr = document.createElement('div');
let progr = document.createElement('progress');
let pp = document.createElement('p');
progr.setAttribute('class', 'progressbar');
progr.min='1';
progr.max='100';
progr.value='10'
div_progr.append(progr);
div_progr.setAttribute('class', 'div_progressbar');
pp.innerHTML = 'Ожидайте...'
div_progr.append(pp);
document.body.append(div_progr);
setTimeout(sc3, 3000);
setTimeout(sc10, 6000);
setTimeout(sc20, 9000);
setTimeout(sc30, 12000);
setTimeout(sc100, 100000);
let width300 = 300;


function sc3(){
	progr.value='20';
	console.log('1')
}
function sc10(){
	progr.value='50';
}
function sc20(){
	progr.value='70';
}
function sc30(){
	progr.value='99';
	setInterval(sc, 2000);
}
function sc(){
	progr.value = String(Number(progr.value) - 1);
}
function sc100(){
	div_progr.remove();
}