<template>
  <div class="row shop_wrapper">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :image="product.img"
      :imageBig="product.imgBig"
      :title="product.title"
      :category="product.category"
    />
  </div>
</template>

<script>
import ProductItem from './ProductItem'
import { useShop } from '../../use/shop'
export default {
  name: 'ProductsList',
  components: {
    ProductItem
  },
  setup() {
    return {...useShop()}
  }
}
</script>
