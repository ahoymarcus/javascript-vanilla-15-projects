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

#### Vanilla Projects (the 15 Projects) -  canal Coding Addict

Conjunto de projetos JavaScript inspirados na apresentação do professor **Johm Smilga** para aprofundar no conhecimento da linguagem.:[^1]


<br />

### Imagem do App Interative Menu apresentando uma seleção de itens de cardápio de acordo com a categoria escolhida pelo usuário:

![Imagem do App Interative Menu apresentando uma seleção de itens de cardápio](/public/images/javascript-vanilla-interative-menu-01.png)


<br />



<br />
<br />

[^1]:Coding Addict - John Smilga 

