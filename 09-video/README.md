# Video Section App - JavaScript Vanilla   

<br />

Esse pequeno projeto cria um app que renderiza dinamicamente e controla uma seção vídeo dentro de uma página web. Assim, até esse momento todo o trabalho ocorre do lado HTML e CSS, enquanto que o primeiro posiciona os elementos de vídeo e de heading, e que o segundo cria um efeito de sombreamento por sobre o vídeo para tornar o texto de heading mais nítido.

<br />

O problema que ocorre aqui e que demanda do JavaScript um socorro para a resolução da questão tem haver com a adição do Overlay que causa o escurecimento da imagem do vídeo, mas que também tornam os controles do vídeo inacessíveis ao usuário. 

<br />

- HTML

<br />

```
<header>
	<video class="video-container" muted autoplay loop>
		<source src="./video.mp4" type="video/mp4" />
	</video>
	<h1>video project</h1>
</header>
```

<br />

- CSS

<br />

O elmento de vídeo é esticado para cobrir todo o espaço, mas é posicionado no índex -2, para ficar abaixo de toda a camada de elementos:

<br />

```
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}
```
<br />

O elmento de Overlay já é posicionado um índice acima, para ficar no meio das três camadas:

<br />

```
/* header after */
header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
} 
```

<br />

Finalmente, acima fica, então, o heading H1 que mantém o valor padrão de posicionamento com o índice 1.


<br />

Interessante notar no trabalho com o jogo dos 03 botões operando para controlar o vídeo, em que o terceiro é posicionado inicialmente no começo do elemento pai, de modo que ele acaba cobrindo o primeiro botão.
Contudo, uma vez clicado ele é empurrado a esquerda, cobrindo o segundo botão e apresentando o primeiro:

<br />

```
.switch-btn span {
  display: inline-block;
  font-size: 0.85rem;
  cursor: pointer;
  text-transform: capitalize;
  color: var(--clr-primary-5);
}
.switch {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--clr-primary-5);
  border-radius: var(--radius);
  margin: 0;
  display: block;
  transition: var(--transition);
}
.slide .switch {
  left: 50%;
}

```

<br />

Outro ponto interessante do projeto deste app é o uso do Listener 'Load', que é acionado quando toda a página HTML, inclusive seus recursos, como vídeo, já foram totalmente carregados.

<br />

Por default, o preloader é colodado acima de tudo, com o índice de 999, mas que após aquele evento do listener para 'Load', ele é escondido e colocado abaixo de todas as camadas com o índice -999:

<br />

```
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--clr-white);
  display: grid;
  justify-content: center;
  align-items: center;
  visibility: visible;
  z-index: 999;
  transition: var(--transition);
}
.hide-preloader {
  z-index: -999;
  visibility: hidden;
}
```

<br />

```
// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
	preloader.classList.add('hide-preloader');
});
```


<br />

#### Vanilla Projects (the 15 Projects) -  canal Coding Addict

Conjunto de projetos JavaScript inspirados na apresentação do professor **Johm Smilga** para aprofundar no conhecimento da linguagem.:[^1]


<br />

### Imagem do App Interative Menu apresentando uma seleção de itens de cardápio de acordo com a categoria escolhida pelo usuário:

![Imagem do App Interative Menu apresentando uma seleção de itens de cardápio de acordo com a categoria escolhida pelo usuário](/public/images/javascript-vanilla-video-section-01.png)


<br />



<br />
<br />

[^1]:Coding Addict - John Smilga 

