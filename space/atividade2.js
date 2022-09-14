// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

let mostrar = document.querySelectorAll(".botao-expandir-retrair");
let parenteses = mostrar.parentNode;

for(let i = 0; i < mostrar.length; i++){
    mostrar[i].addEventListener('click', function(e){
        let clicado = e.currentTarget;
        let parenteses = clicado.parentNode;
        parenteses.classList.toggle('expandido');
        clicado.innerHTML = '-';
    })
}


