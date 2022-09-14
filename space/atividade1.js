// Faça o exercício da GALERIA de IMAGENS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-front-end/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    '01-philae-parts.jpg',
    '02-philae-rosetta.jpg',
    '03-philae-separation.jpg',
    '04-philae-67-picture.jpg',
    '05-philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: '01-philae-parts.jpg')
let indiceDaFotoAtual = 0;

// ...COMECE a implementar aqui <--------------------------------------------

let cliqueEl = document.querySelector('#proximo');
let anteriorEl=document.querySelector('#anterior');

cliqueEl.addEventListener('click', function() {
  indiceDaFotoAtual++;
  if (indiceDaFotoAtual > 4) {
    indiceDaFotoAtual=0;
  }
  let imagem = document.querySelector('#slide');
  imagem.src = servidorDasImagens + nomesDasImagens[indiceDaFotoAtual];
});

anteriorEl.addEventListener('click', function() {
  indiceDaFotoAtual--;
  if (indiceDaFotoAtual < 0) {
    indiceDaFotoAtual = 4;
  }
  console.log("ioioi")
  let imagemAnterior = document.querySelector('#slide');
  imagemAnterior.src = servidorDasImagens + nomesDasImagens[indiceDaFotoAtual];

})



