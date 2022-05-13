// Construtora com configurable false
function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: false,
    value: estoque,
    writable: false,
    configurable: false
  })
}
const produto1 = new Produto('Camiseta', 49, 765)
produto1.estoque = 800
console.log(produto1.estoque)

// Construtora com configurable true
function Produto2(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: false,
    value: estoque,
    writable: false,
    configurable: true
  })

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: false
  })
}

const produto2 = new Produto2('Camiseta', 49, 765)
produto2.estoque = 800
console.log(produto2.estoque)
console.log(produto2)
