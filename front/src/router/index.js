import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/admin/Login.vue'

const router = createRouter({
  history: createWebHistory(),
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
        },
        {
          path: '1947',
          name: '1947',
          component: () => import('../views/1947.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginVue
        },
        {
          path: 'messages',
          name: 'messages',
          component: () => import('../views/admin/Messages.vue')
        }
      ]
    }
  ]
})

export default router
