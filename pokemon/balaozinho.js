//esse pega todos os marcação
let marcacaoEl = document.querySelectorAll(".marcacao");
//esse pega só o primeiro
let marcacao = document.querySelector(".marcacao");
let balaozinhoEl = document.querySelector("#balaozinho");
let string = "<h3>titulo foda</h3><p>blabla</p>";

//exercicios do 1 ao 4
for (let elemento of marcacaoEl) {
  //balão aparecer quando mause passa por cima do quadrado
  elemento.addEventListener("mouseover", function (e) {
    let marcacaoSelecionada = e.currentTarget;

    let titulo = marcacaoSelecionada.dataset.titulo;
    let resto = marcacaoSelecionada.dataset.conteudo;

    balaozinhoEl.innerHTML = `<h2>${titulo}</h2><p>${resto}</p>`;
    balaozinhoEl.style.display = "block";
  });

  //balão desaparacer quando mause passa por cima do quadrado
  elemento.addEventListener("mouseout", function (e) {
    balaozinhoEl.innerHTML = "";
    balaozinhoEl.style.display = "none";
  });

  //balão acompanhar o mouse por sentro do quadrado
  elemento.addEventListener("mousemove", function (e) {
    balaozinhoEl.style.left = `${e.pageX}px`;
    balaozinhoEl.style.top = `${e.pageY}px`;
  });

}

let botaoEl = document.querySelector("#definir-marcacao");

let left = document.querySelector("#marcacao-x").value;
let alto = document.querySelector("#marcacao-y").value;
let width = document.querySelector("#marcacao-largura").value;
let height = document.querySelector("#marcacao-altura").value;

//definir onde vai aparecer o quadrado
botaoEl.addEventListener("click", function(){
        marcacao.style.left = `${left}px`;
        marcacao.style.top = `${alto}px`;
        marcacao.style.width = `${width}px`;
        marcacao.style.height = `${height}px`;
});

