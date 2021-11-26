class Produto {
  constructor ({nome, preco, foto}) {
    this.nome = nome
    this.preco = preco
    this.foto = foto
  }
}

const pizzas = [
  new Produto({nome: 'la Cuma', preco: 24, foto: './images/pizzas/pizza-la-cuma.svg'}),
  new Produto({nome: 'La Menta', preco: 24, foto: './images/pizzas/pizza-la-menta.svg'}),
  new Produto({nome: 'La Bana', preco: 24, foto: './images/pizzas/pizza-la-bana.svg'}),
  new Produto({nome: 'La Toca', preco: 24, foto: './images/pizzas/pizza-la-toca.svg'}),
]

console.log(pizzas[0])

export { pizzas }