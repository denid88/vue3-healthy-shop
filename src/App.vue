<template>
  <component :is="`${layout}-layout`" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import EmptyLayout from './layout/EmptyLayout'
export  default  {
  setup() {
    const route = useRoute()
    const store = useStore()

    const getProducts = () => store.dispatch('products/getProducts')

    return {
      layout: computed(() => route.meta.layout),
      getProducts
    }
  },
  components: {
    MainLayout,
    AuthLayout,
    EmptyLayout
  },
  created() {
    this.getProducts()
  }
}
</script>
