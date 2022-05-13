const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li')
  return li
}

function limpaTarefa() {
  inputTarefa.value = ''
  inputTarefa.focus()
}

function criaBotaoApagar(li) {
  li.innerText += ' '
  const button = document.createElement('button')
  button.innerText = 'Apagar'
  button.setAttribute('class', 'apagar')
  button.setAttribute('title', 'Apague esta tarefa')
  li.appendChild(button)
}

function criaTarefa(inputTexto) {
  const li = criaLi()
  li.innerText = inputTexto
  tarefas.appendChild(li)
  criaBotaoApagar(li)
  salvaTarefas()
  limpaTarefa()
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function (e) {
  const el = e.target

  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvaTarefas()
  }
})

function salvaTarefas() {
  const liTarefas = tarefas.querySelectorAll('li')
  const arrayTarefas = []

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    arrayTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(arrayTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function leTarefas() {
  const tarefasSalvas = localStorage.getItem('tarefas')
  const listaTarefas = JSON.parse(tarefasSalvas)

  for (let tarefa of listaTarefas) {
    criaTarefa(tarefa)
  }
}

leTarefas()
