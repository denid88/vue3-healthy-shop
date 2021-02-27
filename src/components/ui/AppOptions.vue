<template>
  <ul>
    <li class="language">
      <a href="#"> {{ $t('language.title') }} <i class="icon-right ion-ios-arrow-down"></i></a>
      <ul class="dropdown_language">
        <li
          v-for="locale in locales"
          :key="locale.slug"
          :class="{active: currentLocale.slug === locale.slug}"
        >
          <a @click.prevent="changeLocale(locale)">{{ locale.title }}</a></li>
      </ul>
    </li>
    <li class="currency"><a href="#"> {{ $t('currency') }} <i class="icon-right ion-ios-arrow-down"></i></a>
      <ul class="dropdown_currency">
        <li><a href="#">€ Euro</a></li>
        <li><a href="#">£ Pound Sterling</a></li>
        <li><a href="#">$ US Dollar</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { useLanguage } from '@/use/language'
export default {
  name: 'AppOptions',
  setup() {
    return {...useLanguage()}
  }
}
</script>

