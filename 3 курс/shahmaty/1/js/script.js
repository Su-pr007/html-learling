let x='';
for (let i=0;i<8;i++){
	for (let j=0;j<8;j++){
		if((i-j)%2){
			x+='<div style="background-color: blue"></div>';
		}
		else{
			x+='<div style="background-color: crimson"></div>';
		}
	}
}
document.querySelector('#table').innerHTML = x;