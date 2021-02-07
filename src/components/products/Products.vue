<template>
  <div class="container">
    <div class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :type="product.category"
        :img="product.img"
      />
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Product from './Product'
export default {
  name: 'Products',
  components: {
    Product
  },
  setup() {
    const store = useStore()
    const products = computed(() => store.getters['products/getProducts'])
    const categories = computed(() => store.getters['products/getCategories'])
    return {
      products,
      categories
    }
  }
}
</script>

