function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes()
      this.pressionaEnter()
    },

    pressionaEnter() {
      this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          this.realizaConta()
        }
      })
    },

    realizaConta() {
      let conta = this.display.value

      try {
        conta = eval(conta)
        if (!conta) {
          alert('Conta inválida!')
          return
        }

        this.display.value = conta
      } catch (e) {
        alert('Conta inválida!')
        return
      }
    },

    clearDisplay() {
      this.display.value = ''
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target

        //Com o uso de arrow functions, o this desta classe continua
        //sendo o this do objeto criaCalculadora e não o el criado.

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
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
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
