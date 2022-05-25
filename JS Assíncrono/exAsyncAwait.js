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

async function executa() {
  try {
    const fase1 = await simulaConexaoComBD('1', 1000)
    console.log(fase1)
    const fase2 = await simulaConexaoComBD('2', 2000)
    console.log(fase2)
    const fase3 = await simulaConexaoComBD('3', 3000)
    console.log(fase3)
    const erro = await simulaConexaoComBD(3, 3000)
  } catch (e) {
    console.log(e)
  }
}

executa()
