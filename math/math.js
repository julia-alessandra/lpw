//Recuperar o botão
let resolver = document.querySelector("#botao");

//função ao apertar o botão

function resolveEquacao() {
    //pegar o valor
    let valorA = document.querySelector("#coeficiente-a").value;
    let valorB = document.querySelector("#coeficiente-b").value;
    let valorC = document.querySelector("#coeficiente-c").value;

    //entregar o valor
    let valorDelta = document.querySelector("#resultado-delta");
    let valorRaiz1 = document.querySelector("#resultado-x1");
    let valorRaiz2 = document.querySelector("#resultado-x2");
    let qntRaizes = document.querySelector("#qnt-raiz");
    let concavidade = document.querySelector("#resultado-parabola");
    let vertice = document.querySelector("#posicao-vertice");




    if (valorA == 0) {
        window.alert('Opa! Equações de segundo grau precisam ter o coeficiente "A" diferente de zero');
        return;
    }
    
    //definindo a concavidade da parábola
    if(valorA>0){
        concavidade.value = 'Para cima';
    }

    else if(valorA<0){
        concavidade.value = 'Para baixo';
    }
    
    //calcular o delta
    let delta = (valorB ** 2) - (4 * valorA * valorC);
    valorDelta.value = delta;

    //Calcular a posição do vertice na parabola
    let Xv = -valorB/(2*valorA);
    let Yv = -delta/(4*valorA);

    vertice.value = `(${Xv}, ${Yv})`;



   if (delta < 0) {
        valorRaiz1.value = "";
        valorRaiz2.value = "";
        qntRaizes.value = 0;
        return;
    }

    // definindo o valor de x1
        
    let raiz1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    valorRaiz1.value = raiz1;

    // definindo o valor de x2

    let raiz2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
    valorRaiz2.value = raiz2;

    //definindo a quantidade de raiz
    if(delta == 0){
        qntRaizes.value = 1;
    }

    qntRaizes.value = 2;
 
    
}

//função funcionar com o click
resolver.addEventListener("click", resolveEquacao);
