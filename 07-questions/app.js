// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 1 hs  56'  06''
//using selectors inside the element
// traversing the dom

const plusBtn = document.querySelector('.plus-icon');
const minusBtn = document.querySelector('.minus-icon');

const questionBtns = document.querySelectorAll('.question-btn');
const singleQuestion = document.querySelector('.question');
const questionText = document.querySelector('.question-text');



questionBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		console.log(e.currentTarget);
	});
});




// CSS class: show-text
// CSS class: question-text
// plusBtn.addEventListener('click', function(e) {
	// singleQuestion.classList.add('show-text');
// });

// minusBtn.addEventListener('click', function(e) {
	// singleQuestion.classList.remove('show-text');
// });





