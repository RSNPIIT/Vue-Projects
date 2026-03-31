import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/register.vue'

const routes = [
  {
    path: '/reg',
    name: 'Registration',
    component: Registration
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
