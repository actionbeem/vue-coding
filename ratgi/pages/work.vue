<template>
  <div class="work-list">
    <ul class="clear">
      <li v-for="(work, index) in workList" :key="index">
        <nuxt-link to="">
          <div class="box"></div>
          <p>{{ work.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      workList: [
        { title:'item01', description:'this item is.. 01' },
        { title:'item02', description:'this item is.. 02' },
        { title:'item03', description:'this item is.. 03' },
        { title:'item04', description:'this item is.. 04' },
      ]
    }
  },
}
</script>

<style scoped>
.work-list { width:1200px; margin:0 auto; }
.work-list li { width:25%; float:left; padding:25px; box-sizing:border-box; margin-bottom:100px;}
.work-list .box { height:160px; background-color:black; }
</style>
