import { shop } from '../../axios/shop'
import { error } from '../../utils/error'

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload
    }
  },
  actions: {
    async fetchCategories({commit, dispatch}) {
      try {
        const { data } = await shop.get('/categories')
        commit('setCategories', data)
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
    getCategories: state => state.categories,
    getCategory: state => category => state.categories.find((c) => c.type === category)
  }
}
