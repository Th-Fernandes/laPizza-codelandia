 import { pizzas } from './products.js'
 
 const modalConfig = {
   //retira o comportamento padrão do formulário de atualizar ao ser enviado
  form: (event) => {
    event.preventDefault()
  },
  openBuyModal: () => {
    const buyButton = document.querySelectorAll('.buy-pizza')

    let variable = 0
    for(let button of buyButton) {
      button.addEventListener('click', (event) => {
        const buyPizzaModal = document.querySelector('#buyPhaseModal')
        buyPizzaModal.classList.toggle('active')

        const getProductInfo = pizzas[event.target.value]

        const productInfo = document.querySelector('.selected-pizza')
        productInfo.children[0].textContent = getProductInfo.nome
        productInfo.children[1].src = getProductInfo.foto
        //console.log(event.target.value[1])

      })

      //button.value = pizzas[variable++].nome
      button.value = variable++
    }
  },
  // adiciona o cancelador de atualização no botão de confirmar pedido
  cancelSubmitForm: () => {
    const button = document.querySelector('#orderPizza')
    button.addEventListener('click', modalConfig.form)
  },

  getOrder: () => {
    const buyButton = document.querySelector('#orderPizza')

    buyButton.addEventListener('click', () => {
      const buyPizzaModal = document.querySelector('#buyPhaseModal')
      const address = document.querySelector('#userAddress')

      if(address.value != "" && typeof address.value === 'string') {
        buyPizzaModal.classList.remove('active')
      }

      else {
        console.log('precisamos do seu endereço')
      }
    })
  }
}

export { modalConfig }