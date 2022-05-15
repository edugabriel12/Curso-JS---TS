class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  liga() {
    if (this.ligado) {
      return 'Já está ligado'
    }

    this.ligado = true
  }

  liga() {
    if (!this.ligado) {
      return 'Já está desligado'
    }

    this.ligado = false
  }
}

class SmartPhone extends DispositivoEletronico {
  constructor(nome, modelo, cor) {
    super(nome)
    this.modelo = modelo
    this.cor = cor
  }
}
