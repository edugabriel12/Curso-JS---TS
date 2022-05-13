function multiplica(multiplicador) {
  return function (n) {
    return n * multiplicador
  }
}

const duplica = multiplica(2)
const triplica = multiplica(3)

console.log(duplica(10), triplica(20))
