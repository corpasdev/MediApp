import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from '../firebase'


 const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: import('../views/Login.vue')
    },
    {
      path: '/medicamentos',
      name: 'medicamentos',
      component: () => import('../views/Medicines.vue'),
      meta: {
        requiresAuth: true
      }

    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/ordenenes-medicas',
      name: 'ordenenes-medicas',
      component: () => import('../views/MedicalOrder.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/paciente',
      name: 'paciente',
      component: () => import('../views/Paciente.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login' && auth.currentUser){
    next('/');
    return;
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/login');
    return;
  }

  next();
})
export default router
