<template>
  <div class="container with-nav">
    <TheNavBar :isFixed="isFixed" />
    <router-view/>
  </div>
</template>
<script>
import TheNavBar from '../components/TheNavBar'
import { onMounted, onUnmounted, ref } from 'vue'
import { computed } from '@vue/reactivity'
export default {
  name: 'MainLayout',
  components: {
    TheNavBar
  },
  setup() {

    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    let isFixed = ref(false)

    const handleScroll = (e) => {
      return isFixed.value = window.pageYOffset > 50 ? true : false
    }
    return {
      isFixed,
      handleScroll
    }
  }
}
</script>

