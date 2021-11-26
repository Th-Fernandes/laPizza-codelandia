import { modalConfig } from "./scripts/buyModal.js";
import { pizzas} from "./scripts/products.js"

/* configurações do modal de compra */
//cancela o comportamento padrão de atualizar a página ao enviar o formulário
modalConfig.cancelSubmitForm()
modalConfig.openBuyModal()
modalConfig.getOrder()