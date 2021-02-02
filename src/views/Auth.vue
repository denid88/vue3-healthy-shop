<template>
  <div class="center fullheight">
    <form class="card authform" @submit.prevent="onSubmit">
      <h1>Sign In</h1>
      <div :class="['form-control', {'invalid': eError}]">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email">
        <small v-if="eError">{{eError}}</small>
      </div>
      <div :class="['form-control', {'invalid': pError}]">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
        <small v-if="pError">{{pError}}</small>
      </div>
      <div class="column">
        <button class="btn primary" :disabled="isSubmitting || isTooManyAttempts" type="submit">Войти</button>
        <div class="text-danger pt-1" v-if="isTooManyAttempts">{{tooManyAttempts}}</div>
      </div>
    </form>
  </div>
</template>
<script>
import { useLoginForm } from '../use/login-form'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { error } from '../utils/error'
export default {
  name: 'Auth',
  setup() {
    const route = useRoute()
    const store = useStore()

    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning'
      })
    }
    return {...useLoginForm()}
  }
}
</script>
