// Função geradora básica
function* geradora1() {
  yield 'Valor 1'
  yield 'Valor 2'
  yield 'Valor 3'
}

// const gerador = geradora1()
// console.log(gerador.next().value)
// console.log(gerador.next().value)
// console.log(gerador.next().value)

// Função geradora infinita
function* geradora2() {
  let i = 0

  while (true) {
    yield i
    i++
  }
}

function* geradora3() {
  yield 1
  yield 2
  yield 3
}

// Função geradora que se utiliza de outra
// ... função geradora
function* geradora4() {
  yield geradora3()
  yield 4
  yield 5
}

// Funções geradoras também possuem return
//... porém se forem utilizados
//... o return para o código naquele retorno e não executa mais nada
function* geradora5() {
  yield 1
  yield 2
  return 3
}
