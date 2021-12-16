// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 0 hs  1'  20''
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function() {
	//console.log(document.body);
	
	// get random number between 0 - 3
	const randomNumber = getRandomNumber(colors.length);
	console.log(randomNumber);
	
	document.body.style.backgroundColor = colors[randomNumber];
	
	color.textContent = colors[randomNumber];
});


function getRandomNumber(interval) {
	return Math.floor(Math.random() * interval);
};






