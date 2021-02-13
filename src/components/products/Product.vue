<template>
  <div class="card card-product">
    <div class="add-to-cart" v-if="count !== 0">
      <div class="btn primary" @click="addToCart">Add to cart</div>
    </div>
    <div class="product">
      <div class="product__image">
        <img :src="img" :alt="title">
      </div>
      <div class="product__info">
        <div class="product__title">{{ title }}</div>
        <div class="product__category">{{ category }}</div>
      </div>
      <div class="product__info" v-if="count !== 0">
        <div class="product__category">Quantity: {{ count }}</div>
        <div class="product__price">Price: ${{ price }}</div>
      </div>
      <div class="product__info" v-else>
        <div class="product__category">not in stock</div>
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
    id: {
      type: String,
      required: true
    },
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
    },
    count: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    }
  },
  setup(props) {
    const store = useStore()
    const category = computed(() => store.getters['products/getCategory'](props.type))
    const product = computed(() => store.getters['products/getProductById'](props.id))
    const checkInCart = computed(() => store.getters['cart/checkInCart'](props.id))
    const addToCart = () => {
      if (checkInCart.value === false) { store.dispatch('cart/addToCart', product) }
    }

    return {
      addToCart,
      category: category.value?.title != null ? category.value.title : ''
    }
  }
}
</script>
