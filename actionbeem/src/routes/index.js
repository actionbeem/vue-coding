import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import IndexPage from '../views/IndexPage.vue'
import Portfolio from '../views/Portfolio.vue'

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/work',
      name: 'portfolio',
      component: Portfolio
    }
  ],
});