// Exercício 0.1: entendo a saída dos testes
function testeSaidas() {
    escrevaMensagem(0.1, 'Exercício 0.1');
    let a = 1;
    let b = 2;
    let c = [1, 3, 2, 123, 2321, 32, 1];
    let d = [
        [12, 21, 21, 1, 2],
        [12,  1,  2, 3, 1, 1],
        [1,   1,  2, 3, 1, 4]
    ];
    let m = [
        [0, 0, 0, 1],
        [1, 0, 1, 1],
        [0, 0, 0, 1],
        [1, 1, 0, 0]
    ]
    let pessoas = ['Alice', 'Bob', 'Carol', 'Daniele'];
    let e = true;
    
    escreva(0.1, 'Variável a', a); // < variável
    //      ^ nº exerc. ^ rótulo (descrição)     

    // escrever também (i) b, (ii) soma de a e b, (iii) d, (iv) e   (≃ 4 linhas)
    escreva(0.1, 'Variável b', b);
    escreva(0.1, 'Variável a + b', a + b);
    escreva(0.1, 'Variável d', d);
    escreva(0.1, 'Variável e', e);

}
// invocar testeSaidas e ver o resultado na página                  (≃ 1 linha)

testeSaidas();


// ----------------------------------------------------------------------------
// Exercício 0.2: função soma                                    (≃ 4-5 linhas)

function soma(a, b){
    let resultado = a + b;
    escreva(0.2, 'soma', resultado);
    return resultado;
}

soma(5, -2);


// ----------------------------------------------------------------------------
// Exercício 0.3: fazendo cálculos matemáticos                  (≃ 7-10 linhas)

function calculaValoresDoNumero(N){
    let quadrado = N * N;
    let metade = N/2;
    let raiz = Math.sqrt(N);
    escreva(0.3, 'quadrado', quadrado);
    escreva(0.3, 'metade', metade);
    escreva(0.3, 'raiz', raiz);
}

calculaValoresDoNumero(9);


// ----------------------------------------------------------------------------
// Exercício 1: altura da bola no instante                      (≃ 5-10 linhas)
function calculaAlturaBola(tempo, velocidadeInicial, gravidade) {
    let altura = velocidadeInicial * tempo - (gravidade * (tempo * tempo)/2);
    return altura;
}

let altura = calculaAlturaBola(1.5, 50, 9.81);
escreva(1, 'alturaBola', altura);

// ----------------------------------------------------------------------------
// Exercício 2: velocidade da bola no instante                  (≃ 6-12 linhas)
function calculaVelocidadeBola(tempo, velocidadeInicial, gravidade) {
    let velocidadeInstanteT = velocidadeInicial - gravidade * tempo;
    return velocidadeInstanteT;
}

let velocidadeInstanteT = calculaVelocidadeBola(1.5, 50, 9.81);
escreva(2, 'velocidade', velocidadeInstanteT);


