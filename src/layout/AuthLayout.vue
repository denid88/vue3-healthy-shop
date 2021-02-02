<template>
  <div class="container">
    <AppMessage />
    <router-view/>
  </div>
</template>
<script>
import AppMessage from '../components/UI/AppMessage'
export default {
  name: 'AuthLayout',
  components: {
    AppMessage
  }
}
</script>

