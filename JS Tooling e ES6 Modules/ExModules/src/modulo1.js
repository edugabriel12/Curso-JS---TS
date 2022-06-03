export const nome = 'Eduardo'
export const sobrenome = 'Cardoso'

export function soma(x, y) {
  return x + y
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}

// export default (x, y) => x + y

function subtracao(x, y) {
  return x - y
}

export { subtracao as default }
