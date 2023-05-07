k=1;
while(k==1) {
 let first_name = prompt('Введите ваше имя:');
 let second_name = prompt('Введите вашу фамилию:');
 let otchestvo = prompt('Ваше отчество:');
 let usl = confirm(`Вы уверены, что это вы?` + `\n` + `${second_name} ` + `${first_name} ` + `${otchestvo}`);
 if(usl) alert(`Добро пожаловать, ${second_name} ` + `${first_name} ` + `${otchestvo}`)
 else alert('Тогда ладно');
}