function falaComeco(comeco) {
  function falaFinal(final) {
    return comeco + ' ' + final
  }
  return falaFinal
}

const fala = falaComeco('Olá')
console.log(fala('Mundo!'))
