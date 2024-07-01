import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/home/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/tableComponent/Table.vue')
    }
  ]
})

export default router
