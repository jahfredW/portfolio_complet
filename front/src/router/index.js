import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') },
    {
      path: '/project',
      name: 'project',
      children: [
        {
          path: 'snaparadise',
          name: 'snaparadise',
          component: () => import('../views/Snaparadise.vue')
        }
      ]
    }
  ]
})

export default router
