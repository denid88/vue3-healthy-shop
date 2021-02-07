import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css'
import '../src/assets/css/theme.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
