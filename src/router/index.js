import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/agendar',
      name: 'agendar',
      component: () => import('../views/ScheduleView.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/PerfilView.vue')
    },
    {
      path: '/agendar/professor',
      name: 'agendaProfessor',
      component: () => import('../views/ProfessorClassView.vue')
    },
    {
      path: '/agendar/estudante',
      name: 'agendaStudent',
      component: () => import('../views/StudentBookingView.vue')
    },
  ]
})

export default router
