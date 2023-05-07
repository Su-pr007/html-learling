divs = document.getElementsByTagName('div');
colors = ['red', 'orange', 'yellow', 'green', '#15EEFF', 'blue', 'violet']
for(i=0;i<divs.length;i++){
	divs[i].style.background = colors[i];
}
function makeH(){
	for(i=0;i<divs.length;i++){
		divs[i].setAttribute('class', 'ratata');
	}
	setTimeout(saveH, 3000);
}
function saveH(){
	for(r=0;r<7;r++){
		divs[r].setAttribute('class', 'rata');
	}
	setTimeout(saveL, 8000);
}
function saveL(){
	for(x=0;x<7;x++){
		divs[x].style.left = x*200+'px';
	}
}