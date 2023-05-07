'use strict'
let user = {
  name: "Василий Иванович",
  age: 35
};
let userJSONed='';
function toJSON(){
	userJSONed = JSON.stringify(user);
	console.log(userJSONed);
}
function fromJSON(){
	let parsed = JSON.parse(userJSONed); 
	console.log(parsed);
}

// =================================================================

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

function ex2(){
	let jsoned1 = JSON.stringify(meetup, function (key,value){
		return (value==meetup && key!="")?undefined:value
	}, 1);
	console.log(jsoned1);
}