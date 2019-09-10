<template>
  <p>work page</p>
  <!-- <section class="sub-page">
    <div class="wrapper">
      <p style="padding-top:120px;">work-page</p>
    </div>
  </section> -->
</template>

<script>
export default {
  layout:'subPage',
  data(){
    return {

    }
  },
}
</script>

<style scoped>
.sub-page { height:100vh; background-color:#f6f6f6; }
.sub-page .wrapper { height:calc(100vh - 50px); margin:0 50px; background-color:#fff; position:relative; box-shadow:0 5px 35px rgba(0,0,0,0.05); }
</style>
