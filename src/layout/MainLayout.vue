<template>
  <div class="container with-nav">
    <TheNavBar />
    <router-view/>
  </div>
</template>
<script>
import TheNavBar from '../components/TheNavBar'
export default {
  name: 'MainLayout',
  components: {
    TheNavBar
  }
}
</script>

