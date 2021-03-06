// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    count: 500
  },
  getters: {
    increase(state){
      return state.count + 5;
    },
  },
})

export default store;