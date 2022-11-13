//nome do avatar
let nomeEl = document.querySelector("#nome");
let paragrafo = document.querySelector("#avatar-nome");

nomeEl.addEventListener("keyup",
    function(){
        paragrafo.innerHTML = nomeEl.value;
    }
);

//cor do avatar
let corEl = document.querySelector("#pele");
let cabecaEl = document.querySelector("#avatar-cabeca");
let corpinhoEl = document.querySelector("#avatar-corpo");

corEl.addEventListener("change", 
    function(){
        cabecaEl.style.backgroundColor = corEl.value;
        corpinhoEl.style.backgroundColor = corEl.value;
    }
);

//cabelo do avatar
let cabelosEl = document.querySelector("#qualCabelo");
let cabecaoEl = document.querySelector("#avatar-cabelo");

cabelosEl.addEventListener("change", 
    function(){
        cabecaoEl.src = cabelosEl.value;
    }
);

//Não consegui o desafio 1 :(
//baixar imagem
let avatarEl = document.querySelector("#avatar-preview");
let baixarEl = document.querySelector("#baixar");

// no clique de um botão "Baixar imagem"...
// 'avatarEl' deve conter o elemento #avatar-preview
baixarEl.addEventListener("click", function(){
html2canvas(avatarEl, { useCORS: true }).then(function (canvas) {
    // a  foi gerada nesse objeto "canvas" e vamos pedir a ele
    // uma URL que a representa, codificada em uma String no modelo base64¹
    //
    // ¹base64: é uma forma de representar os pixels da imagem (ou qualquer
    // informação, na verdade) usando uma string com 64 tipos de caracteres
    // (todas as letras, maiúsculas e minúsculas, os algarismos de 0 a 9
    // e os símbolos '/' e '+'). Para mais informações, veja a página
    // da Wikipedia sobre base64 (https://pt.wikipedia.org/wiki/Base64)
    let imagemCodificadaEmURL = canvas.toDataURL();

    // cria um <a href="xxx" download="avatar.png"></a> dinamicamente
    // e o configura para que ele aponte (href) para uma URL que codifica
    // a imagem gerada pela biblioteca html2canvas
    let linkEl = document.createElement('a');
    linkEl.download = 'avatar.png';
    linkEl.href = imagemCodificadaEmURL;

    // coloca esse link no body da página
    document.body.appendChild(linkEl);

    // simula um clique no link
    linkEl.click();
  }
);

})