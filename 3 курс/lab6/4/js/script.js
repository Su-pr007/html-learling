'use strict'
elem.addEventListener('click', {
	handleEvent(event) {
		alert(event.type + ' на ' + event.currentTarget);
		}
	}
);