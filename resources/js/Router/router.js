import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login/login'
import Signup from '../components/Login/signup'

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup }
]

const router = new VueRouter({
	routes,
	hashbang : false,
	mode : 'history'
})

export default router