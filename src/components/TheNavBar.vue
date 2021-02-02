<template>
  <nav class="navbar">
    <h3><router-link to="/">Online Service</router-link></h3>
    <ul class="navbar-menu">
      <li><router-link to="/">Shop</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
      <li><a @click.prevent="logOut">Logout</a></li>
    </ul>
  </nav>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'TheNavBar',
  setup() {
    const store = useStore()
    const router = useRouter()
    const logOut = () => {
      store.commit('auth/LOGOUT')
      router.push('/auth')
    }
    return {
      logOut
    }
  }
}
</script>
