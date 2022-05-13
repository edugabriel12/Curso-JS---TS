function Calculadora() {
  this.display = document.querySelector('.display')

  this.btnParaDisplay = valor => {
    this.display.value += valor.innerText
    this.display.focus()
  }

  this.clearDisplay = () => {
    this.display.value = ''
  }

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1)
  }

  this.pressionaEnter = () => {
    this.display.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.realizaConta()
      }
    })
  }

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value)

      if (!conta) {
        alert('Conta Inválida!')
        return
      }

      this.display.value = conta
    } catch (e) {
      alert('Conta Inválida!')
      return
    }
  }

  this.capturaCliques = () => {
    document.addEventListener('click', e => {
      const el = e.target

      if (el.classList.contains('btn-num')) {
        this.btnParaDisplay(el)
      }

      if (el.classList.contains('btn-clear')) {
        this.clearDisplay()
      }

      if (el.classList.contains('btn-del')) {
        this.apagaUm()
      }

      if (el.classList.contains('btn-eq')) {
        this.realizaConta()
      }
    })
  }

  this.inicia = () => {
    this.capturaCliques()
    this.pressionaEnter()
  }
}

const calculadora = new Calculadora()
calculadora.inicia()
