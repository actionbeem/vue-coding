<template>
  <div class="list-wrap">
    <ul class="btn-ctgr">
      <li v-for="(category, index) in categories" :class="{active:category === selectedCategory}" @click="fatchCategory(category)" :key="index">{{category}}</li>
    </ul>
    <ul v-masonry transition-duration="0.3s" class="post-list" item-selector=".post-thumb">
      <li v-masonry-tile class="post-thumb" v-for="(post, key) in filterList" :key="post.id">
        <router-link :to="`/post/${key}`">
          <div class="inner">
            <img class="img-cover" v-if="post.coverImg" :src="post.coverImg">
            <div class="summary">
              <p class="ctgr">{{ post.category }}</p>
              <h2 class="title">{{ post.title }}</h2>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';
import $ from 'jquery'

Vue.use(VueMasonryPlugin)

export default {
  data(){
    return {
      categories: ['all', 'dev', 'design', 'think'],
      selectedCategory: 'all',
    }
  },
  computed: {
    ...mapState(['postList']),
    filterList(){
      if(this.selectedCategory === 'all'){
        return this.postList
      } else {
        return this.postList.filter((post) => {
          return post.category === this.selectedCategory;
        })
      }
    }
  },
  methods: {
    fatchCategory(category){
      this.selectedCategory = category; 
    }
  },
  created(){
    this.$store.dispatch('fetchList')
  },
  mounted(){

  }
}
</script>

<style scoped>
.btn-ctgr  { text-align:center; margin-bottom:30px; }
.btn-ctgr li { display:inline-block; padding:8px 24px; background-color:#fff; border-radius:25px; margin:0 8px; cursor:pointer; }
.btn-ctgr li.active { background-color:#222; color:#fff; }
.list-wrap { width:1200px; margin:100px auto; padding:0 10px; }
.post-list { padding-left:0; box-sizing:border-box; }
.post-thumb {  width:25%; box-sizing:border-box; padding:10px; }
.post-thumb .inner { background-color:#ddd; border-radius:5px;  box-sizing:border-box; text-align:left; overflow:hidden;}
.post-thumb .inner .summary { padding:15px; }
.post-thumb .inner .ctgr { font-size:15px; margin-bottom:7px; color:#666;}
.post-thumb .inner h2 { margin-bottom:5px; font-size:21px; }
.post-thumb .img-cover { width:100%; vertical-align:top; }
</style>






<!--

<template>
  <div class="list-wrap">
    <ul class="btn-ctgr">
      <li v-for="(category, index) in categories" :class="{active:category == selectedCategory}" @click="selectCategory(category)" :key="index">{{category}}</li>
    </ul>
    <ul v-masonry transition-duration="0.3s" class="post-list" item-selector=".post-thumb" ref="postWrap">
      <li v-masonry-tile class="post-thumb" v-for="(post, key) in postList" :key="post.id" :class="post.category">
        <router-link :to="`/post/${key}`">
          <div class="inner">
            <img class="img-cover" v-if="post.coverImg" :src="post.coverImg">
            <div class="summary">
              <p class="ctgr">{{ post.category }}</p>
              <h2 class="title">{{ post.title }}</h2>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';
import $ from 'jquery'

Vue.use(VueMasonryPlugin)

export default {
  data(){
    return {
      categories: ['dev', 'design', 'think'],
      selectedCategory: null,
    }
  },
  computed: {
    ...mapState(['postList'])
  },
  methods: {
    selectCategory(clickedCategory){
      this.selectedCategory = clickedCategory; 
      // const post = this.$refs.postWrap.childNodes;
      // // console.log(post)
      // post.forEach(function(val){
        
      // });
      // if(post.childNodes.classList.con === )
      const test = $('.post-thumb');
    
      $(`.post-thumb.${clickedCategory}`).removeClass('hide')
      $(`.post-thumb.${clickedCategory}`).siblings().addClass('hide')
    }
  },
  created(){
    this.$store.dispatch('fetchList')
  },
  mounted(){

  }
}
</script>

<style scoped>
.btn-ctgr  { text-align:center; margin-bottom:30px; }
.btn-ctgr li { display:inline-block; padding:8px 24px; background-color:#fff; border-radius:25px; margin:0 8px; cursor:pointer; }
.btn-ctgr li.active { background-color:#222; color:#fff; }
.list-wrap { width:1200px; margin:100px auto; padding:0 10px; }
.post-list { padding-left:0; box-sizing:border-box; }
.post-thumb {  width:25%; box-sizing:border-box; padding:10px; }
.post-thumb .inner { background-color:#ddd; border-radius:5px;  box-sizing:border-box; text-align:left; overflow:hidden;}
.post-thumb .inner .summary { padding:15px; }
.post-thumb .inner .ctgr { font-size:15px; margin-bottom:7px; color:#666;}
.post-thumb .inner h2 { margin-bottom:5px; font-size:21px; }
.post-thumb .img-cover { width:100%; vertical-align:top; }
</style>

-->