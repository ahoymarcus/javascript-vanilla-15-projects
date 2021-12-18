// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 3 hs  32'  40''
// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');



switchBtn.addEventListener('click', function() {
	console.log(switchBtn);
	console.log(switchBtn.classList);
	
	// test the CSS control over the button position
	// CSS class: .slide .switch
	if (!switchBtn.classList.contains('slide')) {
		switchBtn.classList.add('slide');
		
		video.pause();
	} else {
		switchBtn.classList.remove('slide');
		
		video.play();
	}
});


// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
	preloader.classList.add('hide-preloader');
});



