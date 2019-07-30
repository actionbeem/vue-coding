<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

body { font-family: "Noto Sans KR", sans-serif; }
* { padding:0; margin:0; }
#app { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #2c3e50; }
ul, li { list-style:none; margin:0; padding:0; }
a { text-decoration: none; }
input, select { outline-width:0; }
.fl-l { flaot:left; }
.fl-r { flaot:right; }
.clear:after { content:""; display:inline-block; clear:both;}
.ta-l { text-align:left; }
.ta-r { text-align:right; }
</style>
