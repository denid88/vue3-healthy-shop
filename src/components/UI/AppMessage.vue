<template>
  <div class="app-message">
    <div v-if="message" :class="['alert', message.type]">
      <p class="alert-title">{{title}}</p>
      <p>{{ description }}</p>
      <span class="alert-close">x</span>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'AppMessage',
  setup() {
    const store = useStore()
    const message = computed(() => store.state.message)
    const TITLE_MAP = {
      primary: 'Success',
      warning: 'Warning',
      danger: 'Error'
    }
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : '')
    const description = computed(() => message.value ? message.value.value : '')

    return {
      message,
      title,
      description
    }
  }
}
</script>
