import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUserUid: null,
    postList: [],
  },
  mutations: {
    FETCH_USER(state, userUid){
      state.currentUserUid = userUid;
    },
    REMOVE_USER(state){
      state.currentUserUid = null;
    },
    FETCH_LIST(state, posts){
      state.postList = posts;
      // const convertArray = [];
      // for (let key in posts) {
      //   convertArray.push(posts[key])
      // }
      // state.postList = convertArray;
    }
  },
  actions: {
    fetchList({ commit }){
      const db = firebase.database().ref();

      db.once('value')
        .then(snapshot => {
          let posts = snapshot.child('posts').val();
          commit("FETCH_LIST", posts)
        })
    }
  },
})