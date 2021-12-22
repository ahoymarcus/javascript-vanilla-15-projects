// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 6 hs  26'  30''

// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);



// ****** FUNCTIONS **********
function addItem(e) {
	e.preventDefault();
	
	const value = groceryInput.value;
	console.log('input value = ', value);
	
	// mock a ID with milliseconds
	const id = new Date().getTime().toString();
	console.log('mock_ID = ', id);
	
	if (value && !editFlag) {
		console.log('adding to the list.....');
	} else if (value && editFlag) {
		console.log('editing.....')
	} else {
		console.log('empty value');
		
		displayAlert('please, enter a value', 'danger');
	}
};


// display alert
function displayAlert(text, action) {
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);
	
	// remove alert
	setTimeout(function() {
		alert.textContent = '';
		alert.classList.remove(`alert-${action}`);
	}, 3000);
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
