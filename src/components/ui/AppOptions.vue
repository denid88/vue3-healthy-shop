<template>
  <ul>
    <li class="language"><a href="#"> {{ $t('language.title') }} <i class="icon-right ion-ios-arrow-down"></i></a>
      <ul class="dropdown_language">
        <li
          v-for="locale in locales"
          :key="locale.slug"
        ><a href="#">{{ locale.title }}</a></li>
      </ul>
    </li>
    <li class="currency"><a href="#"> Currency <i class="icon-right ion-ios-arrow-down"></i></a>
      <ul class="dropdown_currency">
        <li><a href="#">€ Euro</a></li>
        <li><a href="#">£ Pound Sterling</a></li>
        <li><a href="#">$ US Dollar</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AppOptions',
  setup() {
    const locales = ref([
      {title: 'English', slug: 'en'},
      {title: 'Русский', slug: 'ru'}
    ])
    return {
      locales
    }
  }
}
</script>

<style scoped>

</style>
