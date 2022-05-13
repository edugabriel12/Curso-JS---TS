const arrayNomes = ['Eduardo', 'Gabriel', 'Carvalho']

// Simulando pop():
arrayNomes.splice(-1, 1)

// Simulando shift():
arrayNomes.splice(0, 1)

// Simulando remover elementos de qualquer índice:
arrayNomes.splice(2, 1)

// Simulando push():
arrayNomes.splice(arrayNomes.length, 0, 'Lima')

// Simulando unshift():
arrayNomes.splice(0, 0, 'Nome:')

//Simulando trocar elementos do índice:
arrayNomes.splice(2, 1, 'Cardoso')
