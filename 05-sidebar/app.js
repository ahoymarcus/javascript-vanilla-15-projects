// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 1 hs  25'  34''

const sidebar = document.querySelector('.sidebar');
const sideBarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');



//show-sidebar
sideBarToggle.addEventListener('click', function() {
	//console.log(sidebar.classList);
	const cssClassTest = sidebar.classList.contains('show-sidebar');
	console.log(cssClassTest);
	
	cssClassTest ? sidebar.classList.remove('show-sidebar') : sidebar.classList.add('show-sidebar');
});











