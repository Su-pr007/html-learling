document.querySelector('.menu-btn').onclick = function(e){
	e.preventDefault();
	document.querySelector('.menu-btn').classList.toggle('menu-btn_active');
}