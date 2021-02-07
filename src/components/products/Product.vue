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
import { useStore } from 'vuex'
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
    type: {
      type: String
    }
  },
  setup(props) {
    const store = useStore()
    const category = computed(() => store.getters['products/getCategory'](props.type))
    return {
      category: category.value?.title != null ? category.value.title : ''
    }
  }
}
</script>
