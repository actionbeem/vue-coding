import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

  },
  mutations: {},
  actions: {
    fetchList({ commit }){
      // Vue.$http.get('/api/post/')
    }
  },

})