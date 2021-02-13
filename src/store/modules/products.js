import { products } from '../../axios/products'
import { error } from '../../utils/error'

export default {
  namespaced: true,
  state: {
    products: [],
    categories: []
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload
    }
  },
  actions: {
    async fetchProducts({commit, dispatch}) {
      try {
        const { data } = await products.get('/products')
        commit('SET_PRODUCTS', data)
        dispatch('clearMessage', null, { root: true })
      } catch (e) {
        dispatch('setMessage', {
          value: error(e),
          type: 'danger'
        }, { root: true })
      }
    },
    async fetchCategories({commit, dispatch}) {
      try {
        const { data } = await products.get('/categories')
        commit('SET_CATEGORIES', data)
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
    getProductById: state => id => state.products.find(p => p.id === id),
    getCategories: state => state.categories,
    getCategory: state => category => state.categories.find((c) => c.type === category)
  }
}
