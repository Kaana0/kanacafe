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
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import('../views/ClockView.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/VuexComp.vue')
  },
  {
    path: '/webapi',
    name: 'webapi',
    component: () => import('../views/WebApi.vue')
  },
  {
    path: '/webapiImg',
    name: 'webapiImg',
    component: () => import('../views/WebApiImg.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
