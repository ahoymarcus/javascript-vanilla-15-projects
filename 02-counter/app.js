// set initial count
let count = 0;

const htmlValue = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');



// carefull: a node list
console.log(btns);

btns.forEach(function(btn) {
	console.log(btn);
	
	// now we can use the Event Listener
	btn.addEventListener('click', function(e) {
		//console.log(e.currentTarget);
		//console.log(e.currentTarget.classList);
		
		const styles = e.currentTarget.classList;
		
		if (styles.contains('decrease')) {
			count -= 1;	
		} else if (styles.contains('reset')) {
			count = 0;
		} else if (styles.contains('increase')) {
			count += 1;
		}
		
		if (count > 0) {
			htmlValue.style.color = 'green';
		}
		if (count < 0) {
			htmlValue.style.color = 'red';
		}
		if (count == 0) {
			htmlValue.style.color = '#222';
		}
		
		console.log(count);
		
		htmlValue.textContent = count;
	});
	
	
});






// decreaseBtn.addEventListener('click', function() {
	// count -= 1;
	// console.log(count);
	
	// htmlValue.textContent = count;
// });

// resetBtn.addEventListener('click', function() {
	// count = 0;
	// console.log(count);
	
	// htmlValue.textContent = count;
// });

// increaseBtn.addEventListener('click', function() {
	// count += 1;
	// console.log(count);
	
	// htmlValue.textContent = count;
// });






