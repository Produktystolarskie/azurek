import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-left' }
    },
    {
      path: '/oferta',
      name: 'offer',
      component: ItemView,
      meta: { transition: 'slide-right' }
    }
  ]
})

export default router
