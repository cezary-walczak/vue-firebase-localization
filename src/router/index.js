import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/Gmap'
import Signup from '@/auth/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
