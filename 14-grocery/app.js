// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 7 hs  12'  00''

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

// clear itens
clearBtn.addEventListener('click', clearItems);

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
		
		const groceryItem = document.createElement('article');
		
		// add class
		groceryItem.classList.add('grocery-item');
		// add id
		const attr = document.createAttribute('data-id');
		attr.value = id;
		groceryItem.setAttributeNode(attr);
		
		groceryItem.innerHTML = `
			<p class="title">${value}</p>
			<div class="btn-container">
				<button type="button" class="edit-btn">
					<i class="fas fa-edit"></i>
				</button>
				<button type="button" class="delete-btn">
					<i class="fas fa-trash"></i>
				</button>
			</div>
		`;
		
		/*
			ATENTION: to insert listeners to the edit-btn and delete-btn, THIS is the moment we have access to them, since they are not created at the beggining.
			Another possibility would be to target the Parent Element -> grocery-list and through the Bubbling Event use validation to select only the intended buttons.
		*/
		const deleteBtn = groceryItem.querySelector('.delete-btn');
		const editBtn = groceryItem.querySelector('.edit-btn');
		deleteBtn.addEventListener('click', deleteItem);
		editBtn.addEventListener('click', editItem);
		
		// append child and display message
		list.appendChild(groceryItem);
		displayAlert('item added to the list', 'success');
		
		// show container
		container.classList.add('show-container');
		
		// add to local storage
		addToLocalStorage(id, value);
		
		// set back to default
		setBackToDefault();
		
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
};


function clearItems() {
	const items = document.querySelectorAll('.grocery-item');
	
	if (items.length > 0) {
		items.forEach(function(item) {
			list.removeChild(item);
		});
	}
	
	container.classList.remove('show-container');
	displayAlert('empty list', 'danger');
	setBackToDefault();
	// localStorage.removeItem('list');
}

// delete function
function deleteItem() {
	console.log('item deleted');
};

// edit function
function editItem() {
	console.log('edited item');
};

// set back to default
function setBackToDefault() {
	console.log("set back to default");
	
	groceryInput.value = '';
	editFlag = false;
	editID = '';
	submitBtn.textContent = 'submit';
};

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
	console.log('added to local storage');
};


// ****** SETUP ITEMS **********








