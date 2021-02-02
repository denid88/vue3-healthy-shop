import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { FORM_MIN_FIELD_LENGTH, TOO_MANY_ATTEMPTS } from '@/settings/constant.js'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
  const router = useRouter()
  const store = useStore()

  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup.string().trim().required().email()
  )
  const { value: password, errorMessage: pError, handleBlur: pBlur} = useField(
    'password',
    yup.string().trim().required().min(FORM_MIN_FIELD_LENGTH)
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, value => {
    if (value) {setTimeout(() => submitCount.value = 0, 10000)}
  })

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch('auth/login', values)
      await router.push('/')
    } catch (e) {}
  })
  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    isSubmitting,
    onSubmit,
    isTooManyAttempts,
    tooManyAttempts: TOO_MANY_ATTEMPTS
  }
}
