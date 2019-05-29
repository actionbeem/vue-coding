<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="text" v-model="email" placeholder="Email"> 
    <input type="password" v-model="password" placeholder="Password">
    <button v-on:click="signUp">Sign Up</button>
    <span>or go back to <router-link to="signin">login</router-link></span> 
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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
