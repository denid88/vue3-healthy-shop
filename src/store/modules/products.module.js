import { axiosProducts } from '../../axios/axios.products'
import { error } from '../../utils/error'

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    }
  },
  actions: {
    async getProducts({commit, dispatch}) {
      try {
        const { data } = await axiosProducts.get('/products')
        commit('SET_PRODUCTS', data)
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
    getProducts: state => state.products
  }
}
