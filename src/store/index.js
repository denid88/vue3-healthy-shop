import { createStore, createLogger } from 'vuex';
import auth from './modules/auth.module'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  state: {
    message: null
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
    auth
  },
});
