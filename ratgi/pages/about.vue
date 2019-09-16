<template>
  <section>
    <div class="detail-wrap">
      <div class="inner">

      </div>
    </div>
    <div class="cover"></div>
  </section>
</template>

<script>

export default {
  data(){
    return {

    }
  },
}
</script>

<style scoped>
.detail-wrap { }
.detail-wrap .inner { width:800px; height:1000px; margin:0 auto; background-color:#ccc; border-top:10px solid #888; border-bottom:10px solid #888;}
.cover { width:100%; height:50px; background-color:#f6f6f6; position:fixed; bottom:0; left:0; z-index:100; }
</style>
