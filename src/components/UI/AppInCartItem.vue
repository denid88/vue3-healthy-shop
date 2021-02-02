<template>
  <tr>
    <td>{{ name }}</td>
    <td>
      <span class="quantity-value">{{ quantity }}</span>
    </td>
    <td>{{ price }} <span v-if="price !== 0">UAH</span></td>
  </tr>
</template>

<script>
export default {
  name: 'AppCartInItem',
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    quantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>

