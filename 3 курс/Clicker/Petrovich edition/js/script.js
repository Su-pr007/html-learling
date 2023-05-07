'use string'
let i=1;
let r=1;
let event1 = 10;
let min = 10;
let max = 20;
let event2 = Math.floor(Math.random() * (max-min) + min);
post.innerHTML = event2-(r%event2);
let bgs = ['url("img/bg/1.jpg")', 'url("img/bg/2.jpg")', 'url("img/bg/3.jpg")', 'url("img/bg/4.jpg")', 'url("img/bg/5.jpg")', 'url("img/bg/6.jpg")', 'url("img/bg/7.jpg")', 'url("img/bg/8.jpg")', 'url("img/bg/9.jpg")', 'url("img/bg/10.jpg")', 'url("img/bg/11.jpg")', 'url("img/bg/12.jpg")', 'url("img/bg/13.jpg")', 'url("img/bg/14.jpg")', 'url("img/bg/15.jpg")', 'url("img/bg/16.jpg")'];
indexBG = 0;
function buttonPressed(){
	if (buttonID.style.backgroundImage!='url(\"img/Pressed.png\")'){
		buttonID.style.backgroundImage = 'url("img/Pressed.png")';
		}
	else{
		r++;
		post.innerHTML = event2-(r%event2);
	}
	setTimeout(function(){
			buttonID.setAttribute('style', 'background-image: url(img/Shyness.png);');;
	}, 1000)
	
	setTimeout (function(){
		buttonID.setAttribute('style', 'background-image: url(img/Usual.png);');
	}, 6000)
	checkEvents();
	counterID.innerHTML = i++;
};
 function checkEvents(){
	if(i==event1 | i==event1*10 | i==event1*100){
		alert('Юбилей');
	};
	if(r==event2-5){
		alert('Притормози, впереди блокпост');
		r++;
	}
	if(r%event2==0){
		document.body.setAttribute('class', 'Lolicia');
			document.body.style.background = "url(img/Lolicy.png) no-repeat";
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundPositionY = "10%";
		let audio = new Audio();
			audio.src = 'music/jojo - To be Continue.mp3'; 
			audio.autoplay = true;
		setTimeout(function(){
			document.body.setAttribute('class', 'bodyClass');
			document.body.style.background = '';
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundPositionY = "10%";
		}, 15000);
		r++;
	}
};
function changeBG(){
	document.body.style.backgroundImage = bgs[indexBG];
	if(indexBG==bgs.length){
		indexBG=0;
	}
	else{
		indexBG++;
	}
};