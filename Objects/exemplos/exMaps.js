const pessoas = [
  { id: 3, nome: 'Eduardo' },
  { id: 2, nome: 'Camila' },
  { id: 1, nome: 'Julio' }
]

const mapaPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  mapaPessoas.set(id, { ...pessoa })
}

console.log(mapaPessoas)
