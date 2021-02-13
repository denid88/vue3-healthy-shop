<template>
  <div class="container">
    <div class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :type="product.category"
        :img="product.img"
        :count="product.count"
        :price="product.price"
      />
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Product from './Product'
export default {
  name: 'ProductsList',
  components: {
    Product
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const products = computed(() => {
      let productList = store.getters['products/getProducts']
      const path = route.path
      const query = route.query
      console.log('query')
      console.log(query)
      console.log(path)
      let filteredProductListByGroup = query.category ?
        productList.filter(p => p.category === query.category) :
        productList

      let filteredProductListByName = query.name ?
        filteredProductListByGroup.filter(p => p.title.toLowerCase().indexOf(query.name.trim().toLowerCase()) !== -1)  :
        filteredProductListByGroup

      return filteredProductListByName.sort((a,b) => b.count - a.count)
    })
    const categories = computed(() => store.getters['products/getCategories'])
    return {
      products,
      categories
    }
  }
}
</script>

