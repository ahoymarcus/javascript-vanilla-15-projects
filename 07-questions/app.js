// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 2 hs  06'  06''

// Resolução 2
//using selectors inside the element
const questions = document.querySelectorAll('.question');


questions.forEach(function(question) {
	//console.log(question);
	
	/*
		Atenção: veja que aqui estamos usando o Seletor 'querySelector()' a partir de um elemento específico e não mais em todo o objeto document.........
	*/
	const btn = question.querySelector('.question-btn');
	console.log(btn);
	
	btn.addEventListener('click', function() {
		question.classList.toggle('show-text');
	});
});




// Resolução 1
// traversing the dom
// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach(function(btn) {
	// btn.addEventListener('click', function(e) {
		////console.log(e.currentTarget);
		
		// const specificQuestion = e.currentTarget.parentElement.parentElement;
		// console.log('Traversing the DOM... ', specificQuestion);
		
		
		// specificQuestion.classList.toggle('show-text');
	// });
// });





