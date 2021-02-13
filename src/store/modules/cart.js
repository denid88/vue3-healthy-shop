export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
    addToCart({commit}, product) {
      commit('ADD_TO_CART', product)
    }
  },
  getters: {
    checkInCart: state => id => state.cart.find(p => p.id === id) === undefined ? false : true
  }
}
