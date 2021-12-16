const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Tipical Hex value
// A '#' simble and 6 more 
// values from 0 - 9 or 'A' to 'F'
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function() {
	let hexColor = '#';
	
	for (let i=0; i < 6; i++) {
		hexColor += hex[getRandomValue(hex.length)];
	}
	
	console.log(hexColor);
	
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
});



function getRandomValue(arrInterval) {
	return Math.floor(Math.random() * arrInterval);
};



