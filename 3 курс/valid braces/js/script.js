function validBraces(braces){
	braces = braces.split('');
	let s = [];
	for(let i of braces){
		if(i=='{' || i=='}' || i==')' || i=='(' || i==']' || i=='[' || i=='>' || i=='<') s.push(i);
	}
	braces = s.slice(0);
	let k = 0;
	while(s[0]!=undefined){
		for(let i = 1; i<braces.length;i++){
			if(braces[i]=='}' && braces[i-1]=='{' || braces[i]==')' && braces[i-1]=='(' || braces[i]==']' && braces[i-1]=='[' || braces[i]=='>' && braces[i-1]=='<'){
				s.splice(i-1, 2);
			}
		braces=s.slice(0);
		}
		if(k++==1000) break
	}
	if(s[0]==undefined) return true
	else return false
}