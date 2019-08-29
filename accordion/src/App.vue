<template>
  <div id="app">
    <accordion></accordion>
  </div>
</template>

<script>
import Accordion from './components/Accordion.vue'

export default {
  components: {
    Accordion
  }
}
</script>

<style>
body { }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li,p { padding:0; margin:0; }
</style>
