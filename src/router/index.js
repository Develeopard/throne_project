import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import ProductScope from '../views/ProductScope.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/productScope',
    name: 'Product Scope',
    component: ProductScope
  }
]

const router = new VueRouter({
  routes
})

export default router
