import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RawData from './views/RawData.vue'
import Location from './views/Location.vue'
import Documentation from './views/Documentation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/raw',
      name: 'raw',
      component: RawData
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation
    }
  ]
})
