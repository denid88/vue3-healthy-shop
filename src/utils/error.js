const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'User with entered email is not found',
  INVALID_PASSWORD: 'The password is invalid',
  auth: 'Please sign in'
}

export const error = (code) => ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
