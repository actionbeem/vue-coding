<template>
  <div id="app">
    <router-link to="signup">signup</router-link>
    <router-link to="/signin">signin</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue'

export default {
  components: {
    SignUp
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
