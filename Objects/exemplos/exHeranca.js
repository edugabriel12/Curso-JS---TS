function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (valor) {
  this.preco += valor
}
Produto.prototype.desconto = function (valor) {
  this.preco -= valor
}

function Camisa(nome, preco, cor) {
  Produto.call(this, nome, preco)
  this.cor = cor
}

Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

Camisa.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100)
}

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco)
  this.material = material

  Object.defineProperty(this, 'estoque', {
    get: function () {
      return estoque
    },
    set: function (valor) {
      if (typeof estoque !== 'number') return
      estoque = valor
    },
    enumerable: false,
    configurable: false,
    writable: true
  })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Caneca.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100)
}
