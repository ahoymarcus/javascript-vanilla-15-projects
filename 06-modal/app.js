// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 1 hs  48'  32''
// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalOverlay = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');



// CSS class: open-modal
modalBtn.addEventListener('click', function() {
	console.log(modalOverlay.classList);
	modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', function() {
	modalOverlay.classList.remove('open-modal');
});





