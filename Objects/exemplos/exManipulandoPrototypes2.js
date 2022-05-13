function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100)
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100)
}

const produto1 = new Produto('Camisa', 100)
produto1.desconto(25)
console.log(produto1.preco)

// Criando objetos literais e atribuindo os métodos do prototype dentro do
// Construtor
const produto2 = {
  nome: 'Camisa Hugo Boss',
  preco: 120
}

Object.setPrototypeOf(produto2, Produto.prototype)
produto2.aumento(20)
console.log(produto2.preco)

// Criando objeto literal usando Object.create e passando o prototype
// Do produto
const produto3 = Object.create(Produto.prototype, {
  nome: {
    value: 'Camisa Polo',
    writable: false
  },
  preco: {
    value: 150,
    configurable: true,
    writable: true,
    enumerable: true
  }
})

produto3.aumento(20)
console.log(produto3.preco)
