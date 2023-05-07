'use string'
let Doned=0;
function primer1(){
	let FORM = document.forms.my;
	let ELEM = FORM.elements.one;
	alert(ELEM.value);
};
function primer2(){
	FORM = document.forms[1];
	AgeElems = FORM.elements.age;
	alert(AgeElems[0]);
};
function primer3(){
	FIELDSET = FORMA.elements.userFields;
	alert(FIELDSET);
	alert(FIELDSET.elements.login == FORMA.elements.login);
};
function primer4(){
	alert(FORMA2.elements.login == FORMA2.login);
	FORMA2.login.name = 'username';

	alert(FORMA2.elements.login);
	alert(FORMA2.elements.username);

	alert(FORMA2.username == FORMA2.login);
};
function primer5(){
	LOGIN = FORMA3.login;
	alert(LOGIN.form);
};
function primer6(){
	SELECT.options[2].selected = true;
	SELECT.selectedIndex = 2;
	SELECT.value = 'banana';
};
function primer7(){
	SELECTED = Array.from(SELECT2.options).filter(option => option.selected).map(option => option.value);
	alert(SELECTED);
}
function zadacha1(){
	alert('value = '+ genres.options[genres.selectedIndex].value);
	alert('Text = ' + genres.options[genres.selectedIndex].innerHTML);
}
function zadacha2(){
	if(Doned==0){
		genres.append(new Option(value1.value, text1.value));
		Doned = 1;
	}
}
function zadacha3(){
	if(genres.options.length>2){
		i=0;
		while(genres.options[i].value!='classic'){
			i++;
		};
		genres.options[i].selected = true;
	}
}
function zadacha4(){
	if(Doned==1){
		for(i=0;i<genres.options.length;i++){
			if(i>1){
				genres.options[i].remove();
			};
		};
		Doned=0;
	};
};