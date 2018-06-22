import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/Gmap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    }
  ]
})
