// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 1 hs  39'  34''

const sidebar = document.querySelector('.sidebar');
const sideBarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');



// CSS class: show-sidebar
sideBarToggle.addEventListener('click', function() {
	//console.log(sidebar.classList);
	const cssClassTest = sidebar.classList.contains('show-sidebar');
	console.log(cssClassTest);
	
	// Toggle 1.
	//cssClassTest ? sidebar.classList.remove('show-sidebar') : sidebar.classList.add('show-sidebar');
	
	// Toggle 2.
	sidebar.classList.toggle('show-sidebar');
});


closeBtn.addEventListener('click', function() {
	sidebar.classList.remove('show-sidebar');
});









