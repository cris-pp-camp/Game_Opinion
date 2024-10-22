import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '@/views/GameView.vue'
import GradesView from '@/views/GradesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game/:id',
    component: GameView,
    props: true,
    children:[
      {
        path: 'grades',
        props:true,
        component: GradesView
      }
    ]
    // component:() => import('@/views/GradesView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '*',
    component: NotFoundView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
