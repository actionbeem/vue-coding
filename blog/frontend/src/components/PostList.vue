<template>
  <div class="list-wrap">
    <ul v-masonry transition-duration="0.3s" class="post-list" item-selector=".post-thumb">
        <li v-masonry-tile class="post-thumb" v-for="post in postList" :key="post.id">
          <div class="inner">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
        </li>
      </ul>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState(['postList'])
  },
  created(){
    this.$store.dispatch('fetchList')
  }
}
</script>

<style scoped>
.list-wrap { padding:0 10px; }
.post-list { padding-left:0; box-sizing:border-box; }
.post-thumb { width:25%; box-sizing:border-box; padding:10px; }
.post-thumb .inner { background-color:#ddd; border-radius:5px; padding:15px; box-sizing:border-box; text-align:left; }
.post-thumb .inner h2 { margin-bottom:5px; }
</style>
