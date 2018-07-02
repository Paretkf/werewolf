import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Character from '@/components/character/Character'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/character',
      name: 'Character',
      component: Character
    }
  ]
})
