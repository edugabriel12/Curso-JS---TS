function Produto(nome, preco) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    }
  })
}

const produto = new Produto('Camiseta', 35)
console.log(produto)
console.log(produto.nome)
console.log(produto.preco)
