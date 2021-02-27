import { useStore } from 'vuex'
import { computed } from 'vue'

export function useShop() {
  const store = useStore()
  const products = computed(() => store.getters['product/getProducts'])

  return {
    products
  }
}
