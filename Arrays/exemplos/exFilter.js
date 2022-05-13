// Filtre os números maiores que 10
const nums = [0, 3, 56, 12, 67, 4]
const numsFiltrados1 = nums.filter(valor => valor > 10)

console.log(numsFiltrados1)

// passando a callback function de fora
//... da função filter

function callbackFunction(valor) {
  return valor > 10
}

const numsFiltrados2 = nums.filter(callbackFunction)

console.log(numsFiltrados2)
