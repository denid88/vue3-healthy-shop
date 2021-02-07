<template>
  <div class="products-filter card">
    <div class="form-control">
      <input type="text" v-model="filterValue" placeholder="Найти товар...">
      <span class="form-control-clear" v-if="filterValue.length !== 0">&times;</span>
    </div>

    <ul class="list">
      <li class="list-item">Все</li>
      <li class="list-item">
        Название категории
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Filter',
  setup() {
    const filterValue = ref('')
    return {
      filterValue
    }
  }
}
</script>

<style scoped>

</style>
