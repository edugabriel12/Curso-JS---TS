class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
  falar() {
    return `${this.nome} ${this.sobrenome} está falando!`
  }
}
