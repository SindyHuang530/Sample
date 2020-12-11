import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Service from '@/views/Service'

Vue.use(VueRouter)

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { name: 'service', path: '/service', component: Service },
    { name: 'home', path: '/home', component: Home },
    { path: '/', component: Home }
  ]
})
