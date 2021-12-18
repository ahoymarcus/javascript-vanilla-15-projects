# Web Page Questions Section App - JavaScript Vanilla   

<br />

Esse pequeno projeto cria um app que renderiza e controla uma seção de Perguntas numa Web Page. Assim, por meio de referências a elementos internos da página, são criados listeners para por meio de validação da interação do usuário, poder mostrar e/ou esconder os textos de resposta às perguntas.. 

<br />

Assim, no clique de um botão, dependendo do teste, se a classe CSS não estiver presente, a classe é inserida dinamicamente na estrutura HTML e o elemento é mostrado, mas se o teste for positivo e a classe já estiver lá, o app retira a classe fazendo o menu ser fechado.

<br />

Como nota específica deste app, notar que além da iteração nos elementos para a criação dos listeners, foi necessário usar de artifício para selecionar o elemento correto dentro da árvore do DOM.

<br />

Numa primeira resolução, isto foi feito atravessando o DOM com um método do tipo 'parentElement'. Já para a segunda solução ao problema, usou-se referência de seletores especificando sua chamada de dentro de elementos.


<br />

#### Vanilla Projects (the 15 Projects) -  canal Coding Addict

Conjunto de projetos JavaScript inspirados na apresentação do professor **Johm Smilga** para aprofundar no conhecimento da linguagem.:[^1]


<br />

### Imagem do App Questions Section apresentando na tela a pergunta aberta de acordo com a seleção do usuário:

![Imagem do App Questions Section apresentando na tela a pergunta aberta de acordo com a seleção do usuário](/public/images/javascript-vanilla-questions-section-01.png)

<br />

Solução 1:

```
// traversing the DOM
const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		//console.log(e.currentTarget);
		
		const specificQuestion = e.currentTarget.parentElement.parentElement;
		console.log('Traversing the DOM... ', specificQuestion);
		
		
		specificQuestion.classList.toggle('show-text');
	});
});
```

<br />

Solução 2:

```
// using selectors inside the element
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
```



<br />


<br />
<br />

[^1]:Coding Addict - John Smilga 

