import { createStore, createLogger } from 'vuex'
import { i118n } from '../i118n/index'
import auth from './modules/auth'
import product from './modules/product'
import cart from './modules/cart'
import category from './modules/category'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  state: {
    message: null,
    locale: {
      title: 'English',
      slug: 'en',
    },
    currency: {
      symbol: '$',
      title: 'US Dollar',
      slug: 'USD',
    },
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    },
    clearMessage(state) {
      state.message = null;
    },
    changeLocale(state, payload) {
      state.locale = payload
    }
  },
  plugins,
  actions: {
    setMessage({ commit }, message) {
      commit('setMessage', message);
      setTimeout(() => {
        commit('clearMessage');
      }, 5000);
    },
    clearMessage({ commit }) {
      commit('clearMessage');
    },
    changeLocale({ commit },  params) {
      i118n.global.locale = params.slug
      commit('changeLocale', params)
    }
  },
  getters: {
    getCurrentLocale: state => state.locale
  },
  modules: {
    auth,
    product,
    category,
    cart,
  },
});
