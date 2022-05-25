function rand(max, min) {
  min *= 1000
  max *= 1000

  return Math.floor(Math.random() * (max - min) + min)
}

function simulaConexaoComBD(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error('Não é uma string'))
      return
    }

    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

simulaConexaoComBD('Conexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return simulaConexaoComBD('Buscando dados na base', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return simulaConexaoComBD(2222, rand(1, 3))
  })
  .catch(e => {
    console.log(e)
  })
