// dobre os números
const numeros = [1, 3, 5, 7, 8, 12, 43, 523]
const numerosDobrados = numeros.map(valor => valor * 2)
console.log(numerosDobrados)

// 1 - Para cada elemento, retorne uma string com só o nome da pessoa
// 2 - remova apenas a chave nome do objeto
// 3 - adicione uma chave id a cada objeto

const pessoas = [
  { nome: 'Eduardo', idade: 62 },
  { nome: 'Gabriel', idade: 75 },
  { nome: 'Felipe', idade: 48 },
  { nome: 'Carlos', idade: 15 },
  { nome: 'Pedro', idade: 8 }
]

const retornaNome = pessoas.map(obj => obj.nome)
const retornaObjIdade1 = pessoas.map(function (obj) {
  delete obj.nome
  return obj
})
const retornaObjIdade2 = pessoas.map(obj => ({ idade: obj.idade }))
const criaIdAtributo = pessoas.map(function (obj, indice) {
  obj.id = indice + 1
  return obj
})

console.log(criaIdAtributo)
