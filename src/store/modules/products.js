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
    async getProducts({commit, dispatch}) {
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
    async getCategories({commit, dispatch}) {
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
    getCategory: (type) => state => state.categories.find((c) => c.type === type).title
  }
}
