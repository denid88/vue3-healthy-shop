import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'
import Shop from '../views/Shop'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
    meta: {
      layout: 'main',
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: () => import('../components/products/Product.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      layout: 'empty'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to,from, next) => {
  const requireAuth = to.meta.auth || null
  console.log(requireAuth)
  console.log(store.getters['auth/isAuthenticated'])
  console.log(store)
  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']){
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router;
