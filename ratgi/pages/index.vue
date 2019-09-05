<template>
  <section>
    <div class="main-page">
      <img class="logo" src="../assets/images/logo.png" alt="logo 이미지">
      <ul class="link-list">
        <li v-for="link in routeLinks" :key="link">
          <nuxt-link :to="link">{{ link }}</nuxt-link>
      </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      routeLinks: ['about','work','blog']
    }
  }
}
</script>

<style scoped>
.main-page { height:calc(100vh - 50px); margin:0 50px; background:url(../assets/images/main_image.jpg) no-repeat center; background-size:cover; position:relative; }
.main-page .logo { width:100px; position:absolute; top:0; left:0; }
.main-page .link-list { position:absolute; top:40px; right:0;}
</style>

