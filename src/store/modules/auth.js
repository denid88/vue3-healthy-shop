const TOKEN_KEY = 'jwt-token'
import { auth } from '../../axios/auth'
import { error } from '../../utils/error'
export default {
  namespaced: true,
  state: {
    token: localStorage.getItem(TOKEN_KEY)
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
      localStorage.setItem(TOKEN_KEY, payload)
    },
    LOGOUT(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  actions: {
    async login({ commit, dispatch }, params) {
      const url = `accounts:signInWithPassword?key=${process.env.VUE_APP_FB_API_KEY}`
      try {
        const { data } = await auth.post(url, {...params, returnSecureToken: true})
        commit('SET_TOKEN', data.idToken)
        dispatch('clearMessage', null, { root: true })
      } catch (e) {
        console.log(e)
        dispatch('setMessage', {
          value: error(e.response.data.error.message),
          type: 'danger'
        }, { root: true })
      }
    }
  },
  getters: {
    token: state => state.token,
    isAuthenticated: (_, getters) => !!getters.token
  }
}

