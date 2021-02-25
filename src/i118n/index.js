import { createI18n } from 'vue-i18n'
import { en } from './en'
import { ru } from './ru'

const messages = {
  en: en,
  ru: ru
}

export const i118n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
