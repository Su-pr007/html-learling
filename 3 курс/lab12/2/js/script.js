"use strict"
let modalWindow = document.createElement('div');
let inModal = document.createElement('div');
let btn = document.createElement('input');
btn.setAttribute('type', 'button');
btn.setAttribute('onclick', 'rmvmdl()');
btn.setAttribute('class', 'modalButton');
btn.value = 'Ясно';
inModal.id = 'inModal';
inModal.setAttribute('class', 'inModal');
modalWindow.id = 'modalWindow';
modalWindow.setAttribute('class', 'modal');
modalWindow.append(inModal);
let login1 = 'admin';
let passw1 = "admin";
function submit1(){
	document.getElementById('loginBlock').style.border = 'none';
	document.getElementById('passwordBlock').style.border = 'none';
	switch(document.forms[0].login.value){
		case login1:
		switch(document.forms[0].password.value){
			case passw1:
				switch(document.querySelector('#youSure').checked){
					case true:
					for(let i=0;document.forms[0].length!=0;i++){
						document.forms[0].children[0].remove();
					}
					document.body.setAttribute('class', 'Tsari');
					document.querySelector('h2#zagol').innerHTML ='Анкета';
					document.querySelector('h2#zagol').style.color ='white';
					let p = document.createElement('p');
					p.innerHTML = 'Вы царь?';
					document.forms[0].append(p);
					let label = document.createElement('label');
					let checkbox = document.createElement('input');
					checkbox.setAttribute('type', 'checkbox');
					checkbox.id = 'check1';
					label.innerHTML = 'Люблю спать';
					label.append(checkbox);
					document.forms[0].append(label);
					// ============================
					let label2 = document.createElement('label');
					let checkbox2 = document.createElement('input');
					checkbox2.setAttribute('type', 'checkbox');
					checkbox2.id = 'check2';
					label2.innerHTML = 'Люблю кушать';
					label2.append(checkbox2);
					document.forms[0].append(label2);
					let buttonSubmit = document.createElement('input');
					let submitDiv = document.createElement('div');
					buttonSubmit.setAttribute('type', 'button');
					buttonSubmit.onclick = anketa;
					buttonSubmit.value='Провериться на царя';
					submitDiv.append(buttonSubmit);
					document.forms[0].append(submitDiv);
					break;
				case false:
					addModal('Вы не хотите здесь находиться. Я вас не пущу.');
					break;
			}
			break;
			default:
				addModal('Пароль неправильно');
				break;
			}
			break;
			default:
				addModal('Логин неправильно');
				break;
	}
}
function anketa(){
	if(document.forms[0].querySelectorAll('input[type="checkbox"]')[1].checked && document.forms[0].querySelector('input[type="checkbox"]').checked){
		addModal('Да, вы царь.'+"\n" + 'Удачи с этим');
	}
	else{
	if(document.forms[0].querySelector('input[type="checkbox"]').checked){
		addModal('Вы царь на 1 вариант ответа');
	}
	else if(document.forms[0].querySelectorAll('input[type="checkbox"]')[1].checked){
		addModal('Вы царь на 2 вариант ответа');
	}
	}
	if(document.forms[0].querySelectorAll('input[type="checkbox"]')[1].checked==false && document.forms[0].querySelector('input[type="checkbox"]').checked == false){
		addModal('Вы точно не царь');
	}
}
function rmvmdl(){
	document.querySelector('div#modalWindow').remove();
	switch(document.body.hasAttribute('class')){
		case true:
			document.location.href = 'index2.html';
	}
}






function addModal(x){
	inModal.innerHTML = x;
	document.body.append(modalWindow);
	inModal.append(btn);
}