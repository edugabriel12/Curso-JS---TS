// filtre as pessoas com nome de mais de 5 letras
// Filtre as pessoas com idade maior que 50 anos
const pessoas = [
  { nome: 'Eduardo', idade: 28 },
  { nome: 'Gabriel', idade: 29 },
  { nome: 'Felipe', idade: 17 },
  { nome: 'Carlos', idade: 87 },
  { nome: 'José', idade: 62 },
  { nome: 'Josefa', idade: 62 }
]

const pessoasFiltradasNome = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasFiltradasPorIdade = pessoas.filter(obj => obj.idade > 50)
const pessoasFiltradasComNomeA = pessoas.filter(
  obj => obj.nome[obj.nome.length - 1] === 'a'
)
console.log(pessoasFiltradasComNomeA)
