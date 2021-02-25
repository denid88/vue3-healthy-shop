import { useStore } from 'vuex';
import { computed, ref } from 'vue';

export function useLanguage () {
  const store = useStore()
  const locales = ref([
    {title: 'English', slug: 'en'},
    {title: 'Русский', slug: 'ru'}
  ])
  const changeLocale = (locale) =>
    store.dispatch('changeLocale', locale)
  const currentLocale = computed(() => store.getters['getCurrentLocale'])
  return {
    currentLocale,
    locales,
    changeLocale
  }
}
