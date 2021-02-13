import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { i118n } from './i118n/index'
import 'normalize.css'
import '../src/assets/libs/css/bootstrap.min.css'
import '../src/assets/libs/css/slick.css'
import '../src/assets/libs/css/font.awesome.css'
import '../src/assets/libs/css/ionicons.min.css'
import '../src/assets/libs/css/linearicons.css'
import '../src/assets/libs/css/animate.css'
import '../src/assets/libs/css/slinky.menu.css'
import '../src/assets/libs/css/plugins.css'
import '../src/assets/css/style.css'



createApp(App)
  .use(i118n)
  .use(store)
  .use(router)
  .mount('#app');
