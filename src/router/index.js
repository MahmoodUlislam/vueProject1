import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/home/HomeComponent.vue'

const data = {
  headers: [
    { text: 'ID', value: 'id' },
    { text: 'Name', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Phone', value: 'phone' }
  ],
  items: [
    { id: 1, name: 'John Doe', email: 'test@test.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Doe', email: 'test2@test.com', phone: '123-456-7890' },
    { id: 3, name: 'John Smith', email: 'test3@test.com', phone: '123-456-7890' },
    { id: 4, name: 'Jane Smith', email: 'test4@test.com', phone: '123-456-7890' }
  ]
}
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
      component: () => import('../views/tableComponent/TableComponent.vue'),
      props: { data }
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/formComponent/FormComponent.vue')
    },
  ]
})

export default router
