<template>
  <div class="detail-view">
    <div class="ta-r">
      <router-link :to="`/write/${this.$route.params.pageId}`">
        <button class="btn-edit">
          <!-- <i class="far fa-edit"></i> -->
          <span>수정</span>
        </button>
      </router-link>
    </div>
    <div class="top">
      <h1 class="title">{{ post.title }}</h1>
      <p class="ctgr">{{ post.category }}</p>
    </div>
    <img class="cover" :src="post.coverImg">
    <p class="description" v-html="post.description"></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      post: null,
    }
  },
  created(){
    const postId = this.$route.params.pageId;
    this.$http.get(`/api/post/${postId}`)
      .then(result => {
        this.post = result.data
      })
  }
}
</script>

<style scoped>
.detail-view { width:600px; margin:0 auto; text-align:left;}
.detail-view .btn-edit { line-height:36px; background-color:#ddd; border-radius:3px;}
.detail-view .btn-edit i { margin-right:6px; color:#333; }
.detail-view .btn-edit span { color:#333; }
.detail-view .top {  margin-bottom:40px; border-bottom:1px solid #ddd; }
.detail-view .top .title { margin-bottom:10px;}
.detail-view .top .ctgr { margin-bottom:50px;}
.detail-view .cover { width:100%; margin-bottom:50px; }
</style>
