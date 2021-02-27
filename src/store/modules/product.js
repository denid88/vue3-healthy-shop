import { shop } from '../../axios/shop'
import { error } from '../../utils/error'

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    }
  },
  actions: {
    async fetchProducts({commit, dispatch}) {
      try {
        const { data } = await shop.get('/products')
        commit('setProducts', data)
        dispatch('clearMessage', null, { root: true })
      } catch (e) {
        dispatch('setMessage', {
          value: error(e),
          type: 'danger'
        }, { root: true })
      }
    }
  },
  getters: {
    getProducts: state => state.products,
    getProductById: state => id => state.products.find(p => p.id === id)
  }
}
