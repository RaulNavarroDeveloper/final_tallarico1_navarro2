import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/integrantes',
    name: 'IntegrantesView',
    component: () => import('../views/IntegrantesView.vue')
  },
  { 
    path: '/discografia',
    name: 'DiscografiaView',
    component: () => import('../views/DiscografiaView.vue')
  },
  { 
    path: '/ultima',
    name: 'UltimaView',
    component: () => import('../views/UltimaView.vue')
  },
  { 
    path: '/ingresar',
    name: 'IngresarView',
    component: () => import('../views/IngresarView.vue'),
    props:true,
  },
  { 
    path: '/mostrar',
    name: 'MostrarView',
    component: () => import('../views/MostrarView.vue')
  },
  { 
    path: '/iniciarSesion',
    name: 'IniciarSesionView',
    component: () => import('../views/IniciarSesionView.vue')
  },
  { 
    path: '/registro',
    name: 'RegistroView',
    component: () => import('../views/RegistroView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router