function poId(x){
	return document.querySelector('#'+x).value;
}
function formir(){
	sessionStorage.setItem('famil', poId('secName'));
	sessionStorage.setItem('name', poId('name'));
	sessionStorage.setItem('otchestvo', poId('thirdName'));
	sessionStorage.setItem('year', poId('year'));
	sessionStorage.setItem('birthPlace', poId('birthPlace'));
	sessionStorage.setItem('likeTo', poId('likeTo'));
	sessionStorage.setItem('dontlike', poId('dontLikeTo'));
	let window1 = document.open('newIndex.html', 'osebe', 'width=500px, height=300px');
}