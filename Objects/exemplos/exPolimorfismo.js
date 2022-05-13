function ContaBancaria(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

ContaBancaria.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    return `Saldo Insuficiente: ${this.saldo}`
  }

  this.saldo -= valor
}
ContaBancaria.prototype.depositar = function (valor) {
  this.saldo += valor
}
ContaBancaria.prototype.getSaldo = function (valor) {
  return `Agência: ${this.agencia}/Conta: ${this.conta} | Saldo: ${this.saldo}`
}

function ContaCorrente(agencia, conta, saldo, limite) {
  ContaBancaria.call(this, agencia, conta, saldo)
  this.limite = limite
}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    return `Saldo Insuficiente: ${this.saldo}`
  }

  this.saldo -= valor
}

function ContaPoupanca(agencia, conta, saldo) {
  ContaBancaria.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(ContaBancaria.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const cc = new ContaCorrente(11, 22, 16)
cc.sacar(16)
cc.depositar(11231)
console.log(cc.getSaldo())
