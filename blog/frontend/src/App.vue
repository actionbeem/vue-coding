<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style>
* { padding:0; margin:0; }
body { background-color:#f6f6f6; }
#app {
  font-family: 'Malgun Gothic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul, li { list-style:none; }
input, textarea, button, select { outline-width:0; box-sizing:border-box; border:0; }
button { width:100px; text-align:center; font-size:15px; line-height:46px;cursor:pointer; }
a { color:#222; text-decoration: none; }
select { -webkit-appearance: none; -moz-appearance: none; appearance: none; }  select::-ms-expand { display: none; }
.ta-r { text-align:right; }
.ta-l { text-align:left; }
.clear:after { content:""; display:inline-block; clear:both; }
</style>
