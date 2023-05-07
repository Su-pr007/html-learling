function whatIsZ(){
	let x = document.querySelector('#x').value;
	let y = document.querySelector('#y').value;
	let z = Math.sqrt((x**2) + (y**2));
	alert(z);
}