function Pessoa(nome, sobrenome) {
  // Atributo e método PRIVADOS
  const ID = 123
  const metodoPrivado = function () {
    console.log('Sou um método privado')
  }

  // Atributos e métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodoPublico = function () {
    console.log('Sou um método público')
  }
}

// Inicializa a constructor function com new
const p1 = new Pessoa('Eduardo', 'Gabriel')
