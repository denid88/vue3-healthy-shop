<template>
  <div class="card">
    <div class="product">
      <div class="product__image">
        <img :src="img" :alt="title">
      </div>
      {{ title }}
    </div>
  </div>
</template>
<script>
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
    }
  }
}
</script>
