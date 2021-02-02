<template>
  <div class="card">
    <h1 class="card-title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppTemplate',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup(props) {
     document.title = props.title || 'Service online'
  }
}
</script>

