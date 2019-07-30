<template>
  <div>
    <!-- <header-bar></header-bar> -->
    detail
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue'

export default {
  components: {
    HeaderBar
  },
  created(){
    const a = this.$route.workId
    console.log(a)
  }
}
</script>

<style>

</style>
