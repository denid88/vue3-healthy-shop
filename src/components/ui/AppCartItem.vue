<template>
  <tr v-if="quantity !== 0">
    <td>{{ name }}</td>
    <td>
      <button class="btn primary" @click="add">+</button>
      <span class="quantity-value">{{ quantity }}</span>
      <button class="btn danger" @click="remove">-</button>
    </td>
    <td>{{ price }} <span v-if="price !== 0">UAH</span></td>
  </tr>
</template>

<script>
export default {
  name: 'AppCartItem',
  emits: ['add', 'remove'],
  props: {
    id: {
      type: String,
      required: true,
    },
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
  },
  setup(props, context) {
    const add = () => context.emit('add', {
      id: props.id,
      name: props.name,
      quantity: props.quantity,
      price: props.price
    })
    const remove = () => context.emit('remove', {
      id: props.id,
      price: props.price
    })
    return {
      add,
      remove
    }
  }
}
</script>

