function createTable1(){
 let a = prompt('Количество строк: ', 10);
 let b = prompt('Количество столбцов: ', 10);
 let color1 = prompt('Цвет 1:', 'red');
 let color2 = prompt('Цвет 2:', 'yellow');
 let display1 = 'block';
 document.write("<input type='button' onclick='closeTable()' value='Видимость таблицы'>")
 document.write(`<table id="table1">`);
 for (i=1;i<=a;i++){
 let i1 = i;
  document.write("<tr style='height: 20px;'>");
   for (j=1;j<=b;j++){
    if(i1%3==2){
     document.write(`<td style='background-color: ${color1}; width: 20px;'></td>`);
    }
    else {
     document.write(`<td style='background-color: ${color2}; width: 20px;'></td>`);
    }
	i1++
   }
   document.write("</tr>");
  }
 document.write("</table>");
}


function closeTable(){
	if(document.getElementById('table1').hidden == true){
		document.getElementById('table1').hidden = false;
	}
	else{
		document.getElementById('table1').hidden = true;
	}
}