<template>
  <section class="container">
    <p>index page!!</p>
    <nuxt-link v-for="(link, idx) in links" :key="idx" :to="`/${link}`">{{ link }}</nuxt-link>
    <img v-for="(icon, idx) in snsIcons" :key="idx" :src="require('../assets/images/' + icon + '.png')" alt="">
    <img src="../assets/images/thumb_29cm.jpg" alt="">
  </section>
</template>

<script>
export default {
  data(){
    return {
      links: ['about','work'],
      snsIcons: ['icon_fb', 'icon_insta', 'icon_github']
    }
  }
}
</script>
