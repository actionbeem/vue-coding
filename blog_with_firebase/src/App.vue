<template>
  <div id="app">
    <button class="btn-gl-login" @click.prevent="googleLogin">
      <!-- <img src="../assets/images/gl_logo.png" alt="구글아이디 로그인 버튼 이미지"> -->
      <span>Sign in with Google</span>
    </button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  methods: {
    googleLogin(){      
      let auth = firebase.auth();
      let authProvider = new firebase.auth.GoogleAuthProvider();
      let self = this;

      auth.signInWithPopup(authProvider).then(() => {
        // self.$router.push('/home')
        console.log('sucess!!')
      })      

      auth.onAuthStateChanged(user => {
        if(user){
          console.log('converting!')
        } else {
          console.log('who?')
        }  
      });
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
