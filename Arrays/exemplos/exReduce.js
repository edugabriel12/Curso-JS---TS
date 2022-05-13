// Dobra os números
const numeros = [43, 23, 789, 12, 34, 21]
const soma = numeros.reduce(function (acumulador, valor) {
  acumulador += valor
  return acumulador
}, 0)

// console.log(soma)

// Retorna a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 64 }
]
const pessoaMaisVelha = pessoas.reduce(function (acumulador, obj) {
  if (acumulador.idade > obj.idade) return acumulador
  return obj
})

console.log(pessoaMaisVelha)
