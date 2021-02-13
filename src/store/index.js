import { createStore, createLogger } from 'vuex';
import auth from './modules/auth'
import products from './modules/products'
import cart from './modules/cart'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  state: {
    message: null,
    locale: {
      title: 'English',
      slug: 'en'
    },
    currency: {
      symbol: '$',
      title: 'US Dollar',
      slug: 'USD'
    }
  },
  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload
    },
    CLEAR_MESSAGE(state) {
      state.message = null
    }
  },
  plugins: plugins,
  actions: {
    setMessage({commit}, message) {
      commit('SET_MESSAGE', message)
      setTimeout(() => {
        commit('CLEAR_MESSAGE')
      }, 5000)
    },
    clearMessage({commit}) {
      commit('CLEAR_MESSAGE')
    }
  },
  modules: {
    auth,
    products,
    cart
  },
});
