<template>
  <div class="container">
    <div class="card">
      <h1>Cart</h1>
      <h3 v-if="Object.keys(cart).length === 0" class="text-center">Cart is empty</h3>
      <table v-else class="table in-cart">
        <tbody>
          <AppInCartItem
            v-for="(product, key) in cart"
            :key="key"
            :name="product.name"
            :quantity="product.quantity"
            :price="product.price"
          />
        </tbody>
      </table>
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
          <AppCartItem
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            :name="product.title"
            :quantity="product.count"
            :price="product.price"
            @add="addToCart"
            @remove="removeFromCart"
          />
        </tbody>
      </table>
      <hr>
      <p class="text-right"><strong>Total: {{ totalCount }} <span v-if="totalCount">UAH</span></strong></p>
      <p class="text-right">
        <button class="btn">Pay</button>
      </p>
    </div>
  </div>
</template>
<script>
import AppCartItem from '../components/ui/AppCartItem'
import AppInCartItem from '../components/ui/AppInCartItem'
import { useCart } from '../use/cart'
export default {
  name: 'Cart',
  setup() {
    return {...useCart()}
  },
  components: {
    AppCartItem,
    AppInCartItem
  }
}
</script>
