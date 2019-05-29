<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="text" v-model="email" placeholder="Email"> 
    <input type="password" v-model="password" placeholder="Password">
    <button v-on:click="signIn">Sign In</button>
    <!-- <span>or go back to <router-link to="/login">login</router-link></span>  -->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signIn',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function(user){
          alert('success!!!')
        },
        function(err){
          alert('oops!')
        }
      )
    }
  }
}
</script>

<style>
</style>
