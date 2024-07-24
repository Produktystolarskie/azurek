import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from '../views/ItemsView.vue'
import ItemView from '../views/ItemView.vue'

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
      path: '/oferty',
      name: 'offers',
      component: ItemsView,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/oferty/:id',
      name: 'oferta',
      component: ItemView
    }
  ]
})

export default router
