//Exercício 0.4: Entendedo o for of e "para cada"
function contandoElementosDoVetor(elementos, elementoSendoProcurado) {
  let quantidade = 0;
  for (let elemento of elementos) {
    if (elemento === elementoSendoProcurado) {
      quantidade = quantidade + 1;
    }
  }
  return quantidade;
}
let vetor = ['monica', 'cebolinha', 'magali', 'cascao'];
let elementos = contandoElementosDoVetor(vetor, 'monica');
escreva(0.4, 'elementos', elementos);


// ----------------------------------------------------------------------------
//Exercício 0.5: Nome do mês dado seu número
function obtemNomeDoMes(numero) {
  if (numero < 1 || numero > 12) {
    escrevaMensagem(0.5, "Mês inválido: " + numero);
    return null;
  } else {
    let meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    return meses[numero - 1];

  }

}

let mes = obtemNomeDoMes(1);
escreva(0.5, 'mês', mes);


// ----------------------------------------------------------------------------
//Exercício 3: Velocidade e altura da bola em vários instantes t 
function calculaVelocidadeAlturaBola(velocidadeInicial, gravidade, n) {
  for (let i = 1; i <= n; i++) {
    escreva(3, 'h(' + i + ')', calculaAlturaBola(i, velocidadeInicial, gravidade));
    escreva(3, 'v(' + i + ')', calculaVelocidadeBola(i, velocidadeInicial, gravidade));
  }
}
let alturaVelocidade = calculaVelocidadeAlturaBola(50, 9.81, 20);


// ----------------------------------------------------------------------------
//Exercício 4: Somatório
function somatorio(n) {
  let S = 0;
  for (let i = 2; i <= n; i = i + 2) {
    S = S + (1 / i);
  }
  return S;
}


let soma2 = somatorio(10);
escreva(4, 'Somatório', soma2);


// ----------------------------------------------------------------------------
//Exercício 5: Posição de um elemento no vetor

function obtemPosicaoDoElemento(vetor, elemento) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === elemento)
      return i;
  }
  return null;
}

let frutas = ['pera', 'cenoura', 'abacaxi', 'uva'];
let posicao = obtemPosicaoDoElemento(frutas, 'uva');
escreva(5, 'posição', posicao);


// ----------------------------------------------------------------------------
//Exercício 6: Média entre menor e maior valor no vetor
function calculaMediaEntreExtremos(vetor) {
  let menor = vetor[0];
  let maior = vetor[0];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < menor)
      menor = vetor[i];

    else if (vetor[i] > maior)
      maior = vetor[i];

  }

  return (menor + maior) / 2;
}

let vetorMedia = [3, -2, 12];
escreva(6, 'média', calculaMediaEntreExtremos(vetorMedia));

// ----------------------------------------------------------------------------
//Exercício 7: Sequência de Fibonacci 
function fibonacci(tamanhoSequencia) {
  let sequencia = [];
  if(tamanhoSequencia > 0){
    sequencia.push(0);
  }

  if(tamanhoSequencia > 1){
    sequencia.push(1);
  }

  for(let i = 2; i < tamanhoSequencia; i++){

    sequencia.push(sequencia[i - 2] + sequencia[i - 1]);

  }
  return sequencia;
}

escreva(7, "Fib(" + 7 + ")", fibonacci(7));

// ----------------------------------------------------------------------------
//Exercício 8: Rede Social
function exibeAmigos(pessoas, amizades, nome){
  let lista = [];
  for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i] === nome)
      for(let j = 0; j < pessoas.length; j++){
        if(amizades[i][j] == 1){
          lista.push(pessoas[j]);
        }
    }
  }
  return lista;
}

let semideuses = ['percy', 'annabeth', 'clarisse'];
let amigos = [[1, 1, 0], [1, 1, 1], [0, 0, 1]];
escreva (8, 'Amizades' , exibeAmigos(semideuses, amigos, 'annabeth'));


function exibeAmigosEmComum(pessoas, amizades, p1, p2){
  let amigosEmComum = [];
  let pessoa1 = obtemPosicaoDoElemento(pessoas, p1);
  let pessoa2 = obtemPosicaoDoElemento(pessoas, p2);

  for(let g = 0; g < pessoas.length; g++){
    if(amizades[pessoa1][g] === 1 && amizades[pessoa2][g] === 1){
      amigosEmComum.push(pessoas[g]);
    }
  }
  return amigosEmComum;
}

let deuses = ['Poseidon', 'Zeus', 'Hades', 'Dionisio', 'Athena', 'Afrodite'];
let amigosOlimpo = [[1, 1, 1, 1, 0, 1], [1, 1, 0, 1, 1, 1], [0, 0, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]];
escreva(8, 'Amigos em comum', exibeAmigosEmComum(deuses, amigosOlimpo, 'Poseidon', 'Athena'));
