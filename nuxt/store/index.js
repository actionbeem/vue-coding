import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    testData: 111
  },
  mutations: {
    UP_STEP(state) {
      state.stepIndex += 1;
    },
    DOWN_STEP(state) {
      state.stepIndex -= 1;
    }
  },
})