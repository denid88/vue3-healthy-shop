<template>
  <router-view/>
</template>
<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { computed } from '@vue/reactivity'
export default {
  name: 'MainLayout',
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

