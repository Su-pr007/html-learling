let rotateX = 0;
let rotateY = 0;
(function (){
	document.onkeydown = function handle(e){
		if(e.keyCode === 37){
			rotateY -= 4;
		}
		if(e.keyCode === 38){
			rotateX += 4;
		}
		if(e.keyCode === 39){
			rotateY += 4;
		}
		if(e.keyCode === 40){
			rotateX -= 4;
		}
	document.querySelector('.cube').style.transform = 'rotateY('+ rotateY
	 +'deg) rotateX(' + rotateX + 'deg)';
	} 
})();