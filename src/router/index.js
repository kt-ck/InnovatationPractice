import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import PersonalCenter from '@/components/PersonalCenter'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
