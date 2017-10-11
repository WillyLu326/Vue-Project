import Vue from 'vue'
import Router from 'vue-router'
import Home from './../routers/Home.vue'
import Menu from './../routers/Menu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
