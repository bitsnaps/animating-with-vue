import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Modal from './views/Modal.vue'
import List from './views/List.vue'
import Drawer from './views/Drawer.vue'
import Cards from './views/Cards.vue'
import Simple from './views/Simple.vue'
import Stagger from './views/Stagger.vue'
import State from './views/State.vue'
import Timeline from './views/Timeline.vue'
import Master from './views/Master.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: Drawer
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: Stagger
    },
    {
      path: '/state',
      name: 'state',
      component: State
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/master',
      name: 'master',
      component: Master
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
  ]
})
