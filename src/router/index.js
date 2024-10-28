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
    path: '/opiniones/:id',
    name: 'game',
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
