import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUserUid: null,
    postList: {},
    test: 123,
  },
  mutations: {
    FETCH_USER(state, userUid){
      state.currentUserUid = userUid;
    },
    REMOVE_USER(state){
      state.currentUserUid = null;
    },
    // FETCH_LIST(state, list){
    //   state.postList = list
    // }
  },
  actions: {
    // fetchList({ commit }){
    //   axios.get('/api/post/')
    //     .then(response => {
    //       commit("FETCH_LIST", response.data)
    //     })
    // }
  },
})