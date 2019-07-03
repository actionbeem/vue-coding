import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUserUid: null,
    postList: {},
  },
  mutations: {
    FETCH_USER(state, userUid){
      state.currentUserUid = userUid;
    },
    REMOVE_USER(state){
      state.currentUserUid = null;
    },
    FETCH_LIST(state, post){
      state.postList = post
    }
  },
  actions: {
    fetchList({ commit }){
      const db = firebase.database().ref();

      db.once('value')
        .then(function (snapshot) {
          let post = snapshot.child('post').val();
          console.log('posts :', post.key)
          commit("FETCH_LIST", post)
        })

      // axios.get('/api/post/')
      //   .then(response => {
      //     commit("FETCH_LIST", response.data)
      //   })
    }
  },
})