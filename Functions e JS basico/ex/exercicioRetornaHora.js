function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('a data não está no formato ideal')
  }

  if (!data) {
    data = new Date()
  }

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

try {
  console.log(retornaHora())
  console.log(retornaHora(new Date('02-05-1986 13:42:32')))
  console.log(retornaHora('123'))
} catch (err) {
  console.log('a hora está errada')
} finally {
  console.log('tenha um bom dia.')
}
