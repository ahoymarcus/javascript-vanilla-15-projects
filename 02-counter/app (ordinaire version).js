// set initial count
let count = 0;

const htmlValue = document.getElementById('value');

const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');


decreaseBtn.addEventListener('click', function() {
	count -= 1;
	console.log(count);
	
	htmlValue.textContent = count;
});

resetBtn.addEventListener('click', function() {
	count = 0;
	console.log(count);
	
	htmlValue.textContent = count;
});

increaseBtn.addEventListener('click', function() {
	count += 1;
	console.log(count);
	
	htmlValue.textContent = count;
});






