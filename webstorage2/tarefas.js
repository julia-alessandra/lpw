let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

// Exercício 1: carregar as tarefas existentes
// ------------
//
let containerEl = document.querySelector('#lista-tarefas');

function insereTarefaNaPagina(tarefa) {
  // 1. cria o elemento
  let tarefaLiEl = document.createElement('li');
  // 2. configura
  tarefaLiEl.innerHTML = tarefa.nome;
  tarefaLiEl.classList.add('item-tarefa');
  if (tarefa.marcado) {
    tarefaLiEl.classList.add('marcado');
  }
  // 3. insere na árvore
  // Desafio 1: novas tarefas no início
  let primeiraTarefaEl = containerEl.querySelector(':first-child');
  containerEl.insertBefore(tarefaLiEl, primeiraTarefaEl);
}

// limpa a <ul> do que quer que esteja lá
containerEl.innerHTML = '';
// chama a função que insere na página para cada tarefa
// do vetor 'tarefas'
tarefas.forEach(insereTarefaNaPagina);




// Exercício 2: incluir uma nova tarefa
// -----------
//
let botaoIncluirEl = document.querySelector('#incluir-nova-tarefa');
let nomeInputEl = document.querySelector('#nova-tarefa-nome');
botaoIncluirEl.addEventListener('click', function() {
  // cria um novo objeto 'tarefa'
  let novaTarefa = {
    nome: nomeInputEl.value,
    categoria: 'outros',
    marcado: false
  };

  // coloca-o no vetor 'tarefas'
  tarefas.push(novaTarefa);
  // cria o <li> referente a essa tarefa e o
  // insere na página
  insereTarefaNaPagina(novaTarefa);

  // limpar o input e devolver o foco pra ele
  nomeInputEl.value = '';
  nomeInputEl.focus();
});


//Exercício 3: Salvar e carregar o nome do dono da lista, Exercício 4: Tentar salvar a lista de tarefas
// -----------
//
let nomeEl = document.querySelector("#nome-usuario");
let salvar = document.querySelector("#salvar");
let carregar = document.querySelector("#carregar");

salvar.addEventListener("click", function(){
  localStorage.setItem('dono', nomeEl.value);
  localStorage.setItem('lista', JSON.stringify(tarefas));
})

carregar.addEventListener("click", function(){
  let nome = localStorage.getItem('dono');
  nomeEl.value = nome;
  containerEl.innerHTML = "";
  let tarefasSalvas = localStorage.getItem('lista');
  tarefasSalvas = JSON.parse(tarefasSalvas);
  tarefasSalvas.forEach(insereTarefaNaPagina);
})

let cont = 0;
let BotaoMin = document.querySelector("#minimizar");
let titulo = document.querySelector("#marca");

BotaoMin.addEventListener("click", function(){
  if(sessionStorage.getItem('estadoMinimizado') == 'false' || cont == 0){
    sessionStorage.setItem('estadoMinimizado', 'true');
    titulo.classList.add('minimizado');
    cont++;
  }
  else
    titulo.classList.remove('minimizado');
    sessionStorage.setItem('estadoMinimizado', 'false');
})
