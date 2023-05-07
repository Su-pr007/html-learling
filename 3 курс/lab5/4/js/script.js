function buttonClick(){
	let color_first = document.getElementsByClassName('color1')[0].value;
	let color_second = document.getElementsByClassName('color2')[0].value;
	if(Boolean(color_first)==0 & Boolean(color_second)==0){
		alert('Цвета не указаны');
		return;
	}
	if(Boolean(color_first)==0){
		alert('Цвет 1 не указан');
		return;
	}
	if(Boolean(color_second)==0){
		alert('Цвет 2 не указан');
		return;
	}
	let tableWidth = document.getElementsByClassName('width')[0];
	let tableHeight = document.getElementsByClassName('height')[0];
	let Table = document.createElement('table');
	let Tbody = document.createElement('tbody');
	let h = tableHeight.value;
	let w = tableWidth.value;
	if(h<=0 & w<=0){
		alert('Необходимо ввести натуральное количество строк и столбцов');
		return;
	}
	if (h<=0){
		alert('Необходимо ввести натуральное количество строк');
		return;
	};
	if(w<=0){
		alert('Необходимо ввести натуральное количество столбцов');
		return;
	};
	if(Boolean(document.getElementsByTagName('table')[0]) == false){
		div_container=document.createElement('div');
		// ------------------------------------------------------
		let div1 = document.createElement('div');
		div1.innerHTML = ('<input type="button" value="Сплошной" onclick="color1()">');
		div_container.append(div1);
		// -------------------------------------------------------
		let div2 = document.createElement('div');
		div2.innerHTML = ('<input type="button" value="Шахматы" onclick="color2()">');
		div_container.append(div2);
		// -------------------------------------------------------
		let div3 = document.createElement('div');
		div3.innerHTML = ('<input type="button" value="Через 2" onclick="color3()">');
		div_container.append(div3);
		// -------------------------------------------------------
		let div4 = document.createElement('div');
		div4.innerHTML = ('<input type="button" value="Рамка" onclick="color4()">');
		div_container.append(div4);
		// -------------------------------------------------------
		let div5 = document.createElement('div');
		div5.innerHTML = ('<input type="button" value="Диагональ" onclick="color5()">');
		div_container.append(div5);
		// -------------------------------------------------------
		let div6 = document.createElement('div');
		div6.innerHTML = ('<input type="button" value="Крест" onclick="color6()">');
		div_container.append(div6);
		// -------------------------------------------------------
		let div7 = document.createElement('div');
		div7.innerHTML = ('<input type="button" value="Змейка" onclick="color7()">');
		div_container.append(div7);
		// -------------------------------------------------------
		let div8 = document.createElement('div');
		div8.innerHTML = ('<input type="button" value="Плюс" onclick="color8()">');
		div_container.append(div8);
		document.body.append(div_container);
		// =======================================================
		for(i=0;i<h;i++){
			let tableRow = document.createElement('tr');
			for(j=0;j<w;j++){
				let TableCell = document.createElement('td');
				TableCell.style.background = color_first;
				tableRow.append(TableCell);
			};
			Tbody.append(tableRow);
		};
		Table.append(Tbody);
		Table.id = 'table1';
		document.body.append(Table);
	}
	else{
		document.getElementsByTagName('div')[0].remove();
		document.getElementsByTagName('table')[0].remove();
	};
};
function color1(){
	if(document.getElementsByTagName('td')[0].style.background==document.getElementsByClassName('color1')[0].value+' none repeat scroll 0% 0%'){
		for(i=0;i<document.getElementsByTagName('td').length;i++){
			document.getElementsByTagName('td')[i].style.background = document.getElementsByClassName('color2')[0].value;
		};
	}
	else{
		for(i=0;i<document.getElementsByTagName('td').length;i++){
			document.getElementsByTagName('td')[i].style.background = document.getElementsByClassName('color1')[0].value;
		};
	};
};
function color2(){
	h = document.getElementsByTagName('tr').length;
	w = document.getElementsByTagName('tr')[0].children.length;
	if(document.getElementsByTagName('td')[0].style.background!=document.getElementsByClassName('color1')[0].value+' none repeat scroll 0% 0%'){
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if((i-j)%2==0 || (i+j)%2==0){
					color_ffirst();
				}
				else{
					color_fsecond();
				};
			};
		};
	}
	else{
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if((i-j)%2==1 | (i+j)%2==1){
					color_ffirst();
				}
				else{
					color_fsecond();
				};
			};
		};
	};
};
function color3(){
	h = document.getElementsByTagName('tr').length;
	w = document.getElementsByTagName('tr')[0].children.length;
	if(document.getElementsByTagName('td')[0].style.backgroundColor==document.getElementsByClassName('color1')[0].value){
		for (i=0;i<h;i++){
			for (j=0;j<w;j++){
				if((i+j)%3==1){
					color_ffirst();
				}
				else {
					color_fsecond();
				};
			};
		};
		return;
	};
	if(document.getElementsByTagName('td')[2].style.background==document.getElementsByClassName('color1')[0].value+' none repeat scroll 0% 0%'){
		for (i=0;i<h;i++){
			for (j=0;j<w;j++){
				if((i+j)%3==0){
					color_ffirst();
				}
				else {
					color_fsecond();
				};
			};
		};
		return;
	}
	else{
		for (i=0;i<h;i++){
			for (j=0;j<w;j++){
				if((i+j)%3==2){
					color_ffirst();
				}
				else {
					color_fsecond();
				}
			}
		}
		return;
	}
}
function color4(){
	h = document.getElementsByTagName('tr').length;
	w = document.getElementsByTagName('tr')[0].children.length;
	if(document.getElementsByTagName('td')[0].style.background==document.getElementsByClassName('color2')[0].value+' none repeat scroll 0% 0%'){
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i==0 | j==0 | i==h-1 | j==w-1){
					color_ffirst();
				}
				else{
					color_fsecond();
				}
			}
		}
	}
	else{
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i==0 | j==0 | i==h-1 | j==w-1){
					color_fsecond();
				}
				else{
					color_ffirst();
				}
			}
		}
	}
}
function color5(){
	h = document.getElementsByTagName('tr').length;
	w = document.getElementsByTagName('tr')[0].children.length;
	if(document.getElementsByTagName('td')[0].style.background==document.getElementsByClassName('color2')[0].value+' none repeat scroll 0% 0%'){
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i+1>j){
					color_ffirst();
				}
				else{
					color_fsecond();
				}
			}
		}
	}
	else{
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i+1>j){
					color_fsecond();
				}
				else{
					color_ffirst();
				}
			}
		}
	}
}
function color6(){
	h = document.getElementsByTagName('tr').length;
	w = document.getElementsByTagName('tr')[0].children.length;
	if(document.getElementsByTagName('td')[0].style.background==document.getElementsByClassName('color2')[0].value+' none repeat scroll 0% 0%'){
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i==j | i+j==w-1){
					color_ffirst();
				}
				else{
					color_fsecond();
				}
			}
		}
	}
	else{
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i==j | i+j==w-1){
					color_fsecond();
				}
				else{
					color_ffirst();
				}
			}
		}
	}
}
function color7(){
	h = document.getElementsByTagName('tr').length;
	w = document.getElementsByTagName('tr')[0].children.length;
	if(document.getElementsByTagName('td')[0].style.background==document.getElementsByClassName('color2')[0].value+' none repeat scroll 0% 0%'){
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i%2==0 | (i%4==1 & j==w-1)| (i%2==1 & j==0 & i%4!=1) ){
					color_ffirst();
				}
				else{
					color_fsecond();
				}
			}
		}
	}
	else{
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if(i%2==0 | (i%4==1 & j==w-1)| (i%2==1 & j==0 & i%4!=1) ){
					color_fsecond();
				}
				else{
					color_ffirst();
				}
			}
		}
	}
}
function color8(){
	h = document.getElementsByTagName('tr').length;
	w = document.getElementsByTagName('tr')[0].children.length;
	if(document.getElementsByTagName('td')[0].style.background==document.getElementsByClassName('color1')[0].value+' none repeat scroll 0% 0%'){
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if((i==(h/2) | i==((h-1)/2)) | (j==(w/2) | j==((w-1)/2))){
					color_ffirst();
				}
				else{
					color_fsecond();
				}
			}
		}
	}
	else{
		for(i=0;i<h;i++){
			for(j=0;j<w;j++){
				if((i==(h/2) | i==((h-1)/2)) | (j==(w/2) | j==((w-1)/2))){
					color_fsecond();
				}
				else{
					color_ffirst();
				}
			}
		}
	}
}
function color_ffirst(){
	color_first = document.getElementsByClassName('color1')[0].value;
	arga=i*w+j
	document.getElementsByTagName('td')[arga].style.background = color_first;
}
function color_fsecond(){
	color_second = document.getElementsByClassName('color2')[0].value;
	arga=i*w+j
	document.getElementsByTagName('td')[arga].style.background = color_second;
}
function changeStyle(){
	ssyl = document.getElementsByTagName('link')[0].href
	if(ssyl=="file:///D:/Labs/html/3%20%D0%BA%D1%83%D1%80%D1%81/lab5/4/css/style.css"){
		document.getElementsByTagName('link')[0].href="file:///D:/Labs/html/3%20%D0%BA%D1%83%D1%80%D1%81/lab5/4/css/style1.css";
	}
	else{
		document.getElementsByTagName('link')[0].href="file:///D:/Labs/html/3%20%D0%BA%D1%83%D1%80%D1%81/lab5/4/css/style.css";
	}
}