<template>
  <div class="card">
    <div class="product">
      <div class="product__image">
        <img :src="img" :alt="title">
      </div>
      <div class="product__info">
        <div class="product__title">{{ title }}</div>
        <div class="product__category">{{ category }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  name: 'Product',
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const category = computed(() => props.category)

    return {
      category
    }
  }
}
</script>
