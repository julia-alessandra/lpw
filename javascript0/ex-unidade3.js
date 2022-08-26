//Exercício 0.6: Métodos úteis dos vetores
function metodosVetor(vetor) {
    let vetorOrganizado = vetor.sort();
    vetorOrganizado.pop();
    vetorOrganizado.unshift('abacate');

    return vetorOrganizado;
}

let vetorMetodos = [4, 0, 9];
let vetorMetodos2 = [1, 2, 3, 4, 5, 6, 7];
escreva(0.6, 'Novo vetor', metodosVetor(vetorMetodos));
escreva(0.6, 'Novo vetor', metodosVetor(vetorMetodos2));


// ----------------------------------------------------------------------------
//Exercício 0.7: Métodos úteis de string
function metodosString(stringQualquer) {
    let stringBonitinha = stringQualquer.toUpperCase();
    stringBonitinha = stringBonitinha.replaceAll('O', 'A');

    return stringBonitinha;
}

escreva(0.7, 'Nova string', metodosString('otorrinolaringologista'));

// ----------------------------------------------------------------------------
//Exercício 9: Escreve datas por extenso
function escreveDataPorExtenso(data) {
    let datas = data.split('/');
    let mes = obtemNomeDoMes(datas[1]);
    let extenso = (datas[0] + ' de ' + mes + ' de ' + datas[2]);
    return extenso;
}

escreva(9, 'Data por extenso', escreveDataPorExtenso('07/09/2012'));
escreva(9, 'Data por extenso', escreveDataPorExtenso('01/01/2022'));
escreva(9, 'Data por extenso', escreveDataPorExtenso('23/08/2006'));

// ----------------------------------------------------------------------------
//Exercício 10: Operações em string
function eliminaCaracteres(texto, caracteresParaEliminar) {

    for (let caractere of caracteresParaEliminar) {
        texto = texto.replaceAll(caractere, '');
    }

    return texto;
}
escreva(10, 'Cracteres eliminadas', eliminaCaracteres('correndo contra o tempo', 'coe'));

function substituiCaracteres(texto, caracteresProcura, caracteresSubstituirPor) {

    for (let i = 0; i < caracteresProcura.length; i++) {
        let caractereProcura = caracteresProcura[i];
        let caractereSubstituirPor = caracteresSubstituirPor[i];

        texto = texto.replaceAll(caractereProcura, caractereSubstituirPor);
            
    }

    return texto;
}
escreva(10, 'Caracteres substituidas', substituiCaracteres('o rato roeu a roupa do rei de roma', 'rao', 'poa'));


function inverteTexto(texto) {
    let textoInvertido = texto.split('');
    textoInvertido = textoInvertido.reverse();
    textoInvertido = textoInvertido.join("");


    return textoInvertido;
}

escreva(10, 'texto invertido', inverteTexto('subino on ibus'));

// ----------------------------------------------------------------------------
//Exercício 12: Funções como parâmetro 1

function dizOiPara(funcaoDeDarOi, nomeDaPessoa) {

    // veja que aqui, independente do nome da função
    // externa, invocamos ela como funcaoDeDarOi
    textoDoOi = funcaoDeDarOi(nomeDaPessoa);

    escrevaMensagem(12, '=========== Início do chat ===========');
    escrevaMensagem(12, textoDoOi);
    escrevaMensagem(12, '======================================');
    escrevaMensagem(12, '<br>');
}


function oiEmPortuguesFormal(nome) {
    return 'Oi Sr(a). ' + nome + ', como vai?';
}

let oiEmPortugues = function (nome) {
    return 'Oi ' + nome + ', blza?';
};


// dá oi para 'Daniel' de várias formas diferentes
dizOiPara(oiEmPortuguesFormal, 'Daniel');
dizOiPara(oiEmPortugues, 'Daniel');
dizOiPara(function (nome) {
    return 'Hi ' + nome + ', how are you?';
}, 'Daniel');


function oiEmEspanhol(nome){
    return 'Hola ' + nome + ', ¿Cómo estás?';
}

function oiEmItaliano(nome){
    return 'Ciao ' + nome + ', Come stai?';
}

function oiEmEsloveno(nome){
    return 'Pozdravljeni ' + nome + ', Kako se počutiš?';
}

dizOiPara(oiEmEspanhol, 'Júlia');
dizOiPara(oiEmItaliano, 'Júlia');
dizOiPara(oiEmEsloveno, 'Júlia');


// ----------------------------------------------------------------------------
//Exercício 13: Funções como parâmetro 2

function aplicaOperacaoEmCadaElemento(operacao, vetor1, vetor2){
    let vetorFinal = [];

    if(vetor1.length != vetor2.length){
        return null;
    }

    else{
        for(let i = 0; i<vetor1.length; i++){
            vetorFinal[i] = operacao(vetor1[i], vetor2[i]);
        }
    }

    return vetorFinal;
}

function Soma(x, y){
    let resultadoSoma = soma(x, y);
    return resultadoSoma
}

function Multiplica(x, y){
    return x * y;
}

function Subtrai(x, y){
    return x - y;
}

let vetorOperacao1 = [4, 2, -1, 10];
let vetorOperacao2 = [10, 2, 3, 5];
escreva(13, 'resultado', aplicaOperacaoEmCadaElemento(Multiplica, vetorOperacao1, vetorOperacao2));

// ----------------------------------------------------------------------------