// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 8 hs  19'  10''

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');



slides.forEach(function(slide, index) {
	slide.style.left = `${index * 100}%`;
});


let counter = 0;

nextBtn.addEventListener('click', function() {
	counter += 1;
	
	carousel();
});

prevBtn.addEventListener('click', function() {
	counter -= 1;
	
	carousel();
});


function carousel() {
	// first implementation
	if (counter === slides.length) {
		counter = 0;
	}
	if (counter < 0) {
		counter = slides.length - 1;
	}
	
	/*
		Moving all the slides to the left: 
		translateX(-100%)
	*/
	slides.forEach(function(slide) {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
};



