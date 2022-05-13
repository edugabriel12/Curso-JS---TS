function soma() {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }

  return total + arguments[0]
}

console.log(soma(1, 2, 3, 4, 5))
