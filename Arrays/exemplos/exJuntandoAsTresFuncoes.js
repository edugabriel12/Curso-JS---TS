const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const operacao = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => (ac += valor))

console.log(operacao)
