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
	//console.log(btn);
	
	btn.addEventListener('click', function() {
		// refazendo a iteração no Nodelist 
		// 'questions' para validar em relação
		// aqueles não clicados pelo user
		questions.forEach(function(item) {
			console.log(item.classList);
			
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		
		question.classList.toggle('show-text');
	});
});




