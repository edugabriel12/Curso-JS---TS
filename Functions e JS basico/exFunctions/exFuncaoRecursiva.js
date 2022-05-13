function recursive(max) {
  console.log(max)
  if (max >= 10) return // Caso base
  max++
  recursive(max)
}

recursive(0)
