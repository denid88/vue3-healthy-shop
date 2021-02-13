<template>
  <div class="products-filter card">
    <div class="form-control">
      <input type="text" v-model="filterByName" placeholder="Найти товар...">
      <span class="form-control-clear"
        v-if="filterByName.length !== 0"
        @click="clearFilterName"
      >&times;</span>
    </div>

    <ul class="list">
      <li class="list-item" @click="clearFilterGroup">All</li>
      <li class="list-item"
        v-for="category in categories"
        :key="category.id"
        @click="filterByGroup(category.type)"
      >
        {{ category.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'ProductFilter',
  setup() {
    const filterByName = ref('')
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const categories = computed(() => store.getters['products/getCategories'])

    const clearFilterGroup = () => {
      const query = { ...route.query }
      delete query.category
      router.replace({query})
    }

    const filterByGroup = (type) => {
      const query = { ...route.query }
      query.category = type
      router.replace({query})
    }

    const clearFilterName = () => {
      const query = { ...route.query }
      delete query.name
      router.replace({query})
      filterByName.value = ''
    }

    watch(filterByName, (value) => {
      const query = { ...route.query }
      if (value.length !== 0) {
        query.name = value
      } else {
        delete query.name
      }
      router.replace({query})
    })

    return {
      filterByName,
      categories,
      clearFilterGroup,
      clearFilterName,
      filterByGroup
    }
  }
}
</script>

<style scoped>

</style>
