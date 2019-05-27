import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '../views/IndexPage.vue'
import WritePage from '../views/WritePage.vue'
import DetailPage from '../views/DetailPage.vue'

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/write',
      name: 'write',
      component: WritePage
    },
    {
      path: '/post/:pageId',
      name: 'detail',
      component: DetailPage
    }
  ],
})