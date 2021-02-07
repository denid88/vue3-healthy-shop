<template>
  <div class="card with-opacity">
    <h1 class="card-title">{{title}}</h1>
    <main>
      <ProductFilter />
      <Products />
    </main>
  </div>
</template>
<script>
import Products from '../products/Products'
import ProductFilter from '../products/ProductFilter'
export default {
  name: 'AppTemplate',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  },
  components: {
    Products,
    ProductFilter
  },
  setup(props) {
     document.title = props.title || 'Service online'
  }
}
</script>

