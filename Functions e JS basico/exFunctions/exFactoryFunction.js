function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    },
    fala(assunto = 'oi') {
      return `${this.nome} está falando ${assunto}`
    },
    get imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Eduardo', 'Gabriel', 1.85, 75)
console.log(p1.imc)
console.log(p1.nome)
console.log(p1.sobrenome)
p1.nomeCompleto = 'Lionel Messi'
console.log(p1.nome)
console.log(p1.sobrenome)
