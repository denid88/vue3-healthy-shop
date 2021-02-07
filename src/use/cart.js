import { useStore } from 'vuex'
import { computed, reactive } from 'vue'

export function cart() {
  const store = useStore()
  const CART_MODEL = reactive({})
  const totalCount = computed(() =>
    Object.values(CART_MODEL).reduce((accumulator, product) => accumulator + product.price, 0))
  const products = computed(() => store.getters['products/getProducts'])
  const addToCart = (product) => {
    if (!CART_MODEL.hasOwnProperty(product.id)) {
      CART_MODEL[product.id] = {
        name: product.name,
        price: product.price,
        quantity: 1
      }
    } else {
      CART_MODEL[product.id].quantity = CART_MODEL[product.id].quantity + 1
      CART_MODEL[product.id].price = CART_MODEL[product.id].price + product.price
    }
  }

  const removeFromCart = (product) => {
    if (!CART_MODEL.hasOwnProperty(product.id)) { return }
    if (CART_MODEL[product.id].quantity !== 1) {
      CART_MODEL[product.id].quantity = CART_MODEL[product.id].quantity - 1
      CART_MODEL[product.id].price = CART_MODEL[product.id].price - product.price
    } else {
      delete CART_MODEL[product.id]
    }
  }
  return {
    totalCount,
    products,
    addToCart,
    removeFromCart,
    cart: CART_MODEL
  }
}
