<template>
  <div class="detail">
    <div class="inner" :class="{ vertical : selectedWork.imgVertical }">
      <h1 class="pg-tit">{{ selectedWork.title }}</h1>
      <p class="sub mb-30">{{ selectedWork.subTitle }}</p>
      <p class="desc mb-30">{{ selectedWork.description }}</p>
      <div class="img-area">
        <img v-for="imgs in selectedWork.detailImg" :key="imgs" :src="require('../../assets/images/detail/' + imgs + '.jpg')">
      </div>
    </div>

    <div class="bottom-cover"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  asyncData({params}) { 
    return { id: params.id }; 
  },
  validate({params}) { 
    return /^\d+$/.test(params.id);
  },
  data(){
    return {
      workID: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['workList']),
    selectedWork(){
      const work = this.workList.filter(work => {
        return work.id === Number(this.workID)
      })
      return work[0]
    },
    checkCategory(){
      return this.selectedWork.category
    },
    checkDirection(){
      return this.selectedWork.direction
    }
  },
  watch: {
    workID(val){
      console.log(val)
    }
  }
}
</script>

<style scoped>
.detail .inner { width:960px; margin:0 auto; padding-top:90px; }
.detail .inner .sub { font-size:18px; color:#bbb; }
.detail .inner .desc { font-size:17px; color:#888; }
.detail .inner .img-area { margin-top:50px; }
.detail .inner .img-area img { width:100%; margin-bottom:110px; }
.detail .inner.vertical { width:700px; margin:0 auto; padding-top:90px; }
</style>