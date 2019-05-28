<template>
  <div class="login-wrap">
    <div class="inner">
      <form action="/login" method="post">
        <label for="user-id">ID</label>
        <input id="user-id" type="text" name="id" placeholder="">
        <label for="user-pwd">PASSWORD</label>
        <input id="user-pwd" type="password" name="password">
        <input type="submit" value="로그인">
      </form>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login-wrap { display:table; height:100vh; margin:0 auto; text-align:left; }
.login-wrap .inner { display:table-cell; vertical-align:middle; }
.login-wrap .inner form { display:inline-block; width:400px; }
.login-wrap input, .login-wrap label { width:100%; }
.login-wrap label { margin-bottom:4px; }
.login-wrap input { font-size:15px;padding:15px; border-radius:3px; background-color:#ddd; margin-bottom:15px; }
.login-wrap input[type="submit"] { margin-top:30px; background-color:#333;color:#fff; font-size:16px; }
</style>
