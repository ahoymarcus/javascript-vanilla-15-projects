// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 4 hs  48'  10''

/*
	Atention: in this project we are using Event Bubbling, since we have wrapper the 'click' event at the parent element 'aboutContainer', so we reach even its children.
*/
const aboutContainer = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');


aboutContainer.addEventListener('click', function(e) {
	console.log(e.target);
	console.log('dataset.id = ', e.target.dataset.id);
	
	const id = e.target.dataset.id;
	
	if (id) {
		// remove active from all tabBtns
		tabBtns.forEach(function(btn) {
			// remove classe Active from all
			btn.classList.remove('active');
			// give class Active to clicked btn
			e.target.classList.add('active');
		});
		
		articles.forEach(function(article) {
			console.log('article.id = ', article.id);
			article.classList.remove('active');
			
			/*
				We could also reach the correct article content to render with:
				const activedArticle = document.getElementById(id);
			*/
			if (article.id === id) {
				article.classList.add('active');
			}
		});
		
		
	}
	
});









