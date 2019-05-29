import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})