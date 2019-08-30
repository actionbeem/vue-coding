import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import index from '../components/Index.vue'
import accordion from '../components/Accordion.vue'
import scroll from '../components/Scroll.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/accordion',
      component: accordion
    },
    {
      path: '/scroll',
      component: scroll
    },
  ],
});

