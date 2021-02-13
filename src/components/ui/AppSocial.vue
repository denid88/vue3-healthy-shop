<template>
  <ul>
    <li
      v-for="(social, key) in socialList"
      :key="key"
    ><a :href="social.link"><i :class="social.icon"></i></a></li>
  </ul>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'AppSocial',
  setup() {
    const socialList = ref([
      {link: '#', icon: 'ion-social-twitter'},
      {link: '#', icon: 'ion-social-googleplus-outline'},
      {link: '#', icon: 'ion-social-youtube-outline'},
      {link: '#', icon: 'ion-social-facebook'},
      {link: '#', icon: 'ion-social-instagram-outline'},
    ])
    return {
      socialList
    }
  }
}
</script>
