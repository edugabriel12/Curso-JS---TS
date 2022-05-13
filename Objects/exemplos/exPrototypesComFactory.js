function criaPessoa1(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando`)
    },
    comer() {
      console.log(`${this.nome} está comendo`)
    }
  }

  return Object.create(pessoaPrototype, {
    nome: {
      value: nome
    },
    sobrenome: {
      value: sobrenome
    }
  })
}

// Outra maneira de fazer
const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  }
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`)
  }
}

const pessoa2Prototype = Object.assign({}, falar, comer)

function criaPessoa2(nome, sobrenome) {
  return Object.create(pessoa2Prototype, {
    nome: {
      value: nome
    },
    sobrenome: {
      value: sobrenome
    }
  })
}
