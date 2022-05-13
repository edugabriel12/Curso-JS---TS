function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate())
  const mes = zeroAEsquerda(data.getMonth() + 1)
  const ano = zeroAEsquerda(data.getFullYear())
  const horas = zeroAEsquerda(data.getHours())
  const minutos = zeroAEsquerda(data.getMinutes())
  const segundos = zeroAEsquerda(data.getSeconds())
  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}

const dataFormatada = new Date()
console.log(formataData(dataFormatada))
