// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 2 hs  06'  06''

// Resolução 1
// traversing the dom
const questionBtns = document.querySelectorAll('.question-btn');


questionBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		//console.log(e.currentTarget);
		
		const specificQuestion = e.currentTarget.parentElement.parentElement;
		console.log('Traversing the DOM... ', specificQuestion);
		
		
		specificQuestion.classList.toggle('show-text');
	});
});





