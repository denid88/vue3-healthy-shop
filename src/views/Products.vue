<template>
  <div class="container">
    <div class="card">
      <div class="products">
        <div class="product__item"
          v-for="product in products"
         :key="product.id"
        >
          {{ product.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Products',
  setup() {
    const store = useStore()
    const products = computed(() => store.getters['products/getProducts'])
    return {
      products
    }
  }
}
</script>

