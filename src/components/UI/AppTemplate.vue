<template>
  <div class="card">
    <h1 class="card-title">{{title}}</h1>
    <Products />
  </div>
</template>
<script>
import Products from '../../views/Products'
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
    Products
  },
  setup(props) {
     document.title = props.title || 'Service online'
  }
}
</script>

