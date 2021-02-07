<template>
  <nav :class="['navbar', {'fixed': isFixed}]">
    <h3><router-link to="/">Healthy Food+</router-link></h3>
    <ul class="navbar-menu">
      <li><router-link to="/">Shop</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'TheNavBar',
  props: {
    isFixed: {
      required: true,
      type: Boolean,
      default: false
    }
  }
}
</script>
