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