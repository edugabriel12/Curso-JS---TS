function mostraHora() {
  const hora = new Date()

  return hora.toLocaleDateString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

const intervalo = setInterval(function () {
  console.log(mostraHora())
}, 1000)

const timer = setTimeout(function () {
  clearInterval(intervalo)
}, 10000)
