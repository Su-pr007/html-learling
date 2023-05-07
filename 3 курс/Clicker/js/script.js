'use string'
let i=1;
let r=1;
let alerts = 0;
let event1 = 20;
let min = 10;
let max = 20;
let event2 = Math.floor(Math.random() * (max-min) + min);
let maxEvent2 = 3;
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
	buttonID.setAttribute('style', 'background-image: url(img/Pressed.png);');
	
	setTimeout (function(){
		buttonID.setAttribute('style', 'background-image: url(img/Usual.png);');
	}, 1000)
	checkEvents();
	counterID.innerHTML = i++;
};
 function checkEvents(){
	if(i==event1 | i==event1*2 | i==event1*3){
		alert('Юбилей');
	};
	if((r%event2)-5==0){
		let Lolicioner1 = document.createElement('div');
		Lolicioner1.setAttribute('class', 'Lolicioner1');
		Lolicioner1.id = 'Lolicioner1';
		document.body.append(Lolicioner1);
		setTimeout(function(){document.getElementById('Lolicioner1').remove();}, 3000);
		r++;
	};
	
	if(r%event2==0){
		document.body.setAttribute('class', 'Lolicia');
		document.body.style.background = "url(img/Lolicy.png) no-repeat";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPositionY = "10%";
		document.body.style.backgroundAttachment= 'fixed';
		let Lolicioner = document.createElement('div');
		Lolicioner.setAttribute('class', 'Lolicioner');
		Lolicioner.id = 'Lolicioner';
		document.body.append(Lolicioner);
		alerts++;
		let audio = new Audio();
			audio.src = 'music/LoliSong.mp3'; 
			audio.autoplay = true;
		i -= 10;
		if(Boolean(document.getElementById('achieve'))==false){
		let achieve = document.createElement('div');
		achieve.setAttribute('class', 'achieve');
		achieve.id = 'achieve';
		document.body.append(achieve);

		};

		if(alerts==maxEvent2-1){
			alert('Последнее предупреждение');
		};
		if(alerts==maxEvent2){
			alert('Потрачено');
			if(confirm('Вы набрали ' + document.querySelector('p#counterID').innerHTML + ' очков. Желаете начать сначала?')){
				again();
			}
			else{
				alert('У тебя был выбор.');
				document.body.remove();
			}
	}
		setTimeout(function(){
			document.body.setAttribute('class', 'bodyClass')
			document.body.style.background = '';
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundPositionY = "10%";
			document.getElementById('Lolicioner').remove();
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