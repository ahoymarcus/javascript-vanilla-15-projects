// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 3 hs  05'  40''

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels



// ********** set date ************
const date = document.getElementById('date');

// see that both methods work nice
//date.textContent = new Date().getFullYear();
date.innerHTML = new Date().getFullYear();



// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function() {
	/*
		Versão da funcionalidade não utilizada, porque ela traz o Height do elemento linksContainer pré-definido, o que dificulta a manutenção em casos onde há um número variável de links.........
		
		linksContainer.classList.toggle('show-links');
	
	
	
		Element.getBoundingClientRect(): retorna o size e position concretos do elemento relativa ao viewport 
		VEJA que propositalmente este elemento tem Height 0 para ficar escondido, e é por isso que esta solução usa um container para ser setado em 0 e deixar ainda o elmento de interesse com valor de height intacto
	*/
	const containerHeight = linksContainer.getBoundingClientRect();
	console.log('containerHeightcontainerHeight = ', containerHeight);
	
	const linksHeight = links.getBoundingClientRect().height;
	console.log('linksHeight = ', linksHeight);
	
	/*
		PROBLEMA: estamos aqui alterando os valores CSS com JS de forma inline. E inline styling precede o feito externamente. 
		Isto vai causar no design que em dispositivo grande, o @media não consiga tirar o valor altera de Height..........
		A correção está lá no @media com !important:
		.links-container {
			height: auto !important;
		}
	*/	
	if (containerHeight.height === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});




// ********** fixed navbar ************

// ********** smooth scroll ************
// select links



















