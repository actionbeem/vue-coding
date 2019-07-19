<template>
  <div>
    <h1 class="page-title ta-l">
      VIRTUAL<br>
      INSANITY
    </h1>
    <div class="work-list-wrap">
      <ul class="filter">
        <li v-for="(category, index) in categories" :class="{ active: selectedCategory === category }" @click="fetchCategory(category)" :key="index">{{ category }}</li>
      </ul>

      <vue-custom-scrollbar class="scroll-area"  :settings="settings">  
        <ul class="work-list clear">
          <li v-for="(work, index) in fetchWorkList" :style="{ 'background-image' : 'url(' + require('../assets/images/' + work.imgUrl + '.jpg') + ')' , 'background-size' : 'cover'}" :key="index">
              <div class="info" :class="work.category" >
                <p class="ctgr">{{ work.category }}</p>
                <p class="tit">{{ work.title }}</p>
              </div>
          </li>
        </ul>
      </vue-custom-scrollbar> 
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  components: {
    vueCustomScrollbar
  },
  data(){
    return {
      categories: ['All', 'Publish', 'Design', 'Competition'],
      selectedCategory: 'All',
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  computed: {
    ...mapState(['db']),
    fetchWorkList(){
      if(this.selectedCategory === 'All'){
        return this.db.works;
      } else {
        const works = this.db.works;
        return works.filter( work => {
          return this.selectedCategory === work.category 
        })
      }
    },
  },
  methods: {
    fetchCategory(category){
      this.selectedCategory = category;
    }
  },
  mounted(){
    // $(window).on("load",function(){
    //     $(".work-list").mCustomScrollbar();
    // });
  }
}
</script>

<style scoped>
.page-title { font-size:70px; color:#333; position:fixed; top:180px; left:100px; font-family: 'Roboto', sans-serif;}
.filter { position:fixed; top:180px; right:640px; display:inline-block; }
.filter li { display:inline-block; cursor:pointer; margin-right:15px; color:#aaa; }
.filter li:hover { color:#666;}
.filter li.active { color:#333; }
.work-list-wrap { width:400px; margin:0 200px 0 auto;}
.work-list { display:inline-block; }
.work-list > li { display:inline-block; width:400px; height:240px; background-color:#f6f6f6; vertical-align: top; margin-bottom:4px; cursor:pointer; }
.work-list .info { height:100%; background-color:rgba(0,0,0,0.2); color:#fff; text-align:left; padding:30px; box-sizing:border-box; opacity:0; transition:opacity .2s ease;}
.work-list .info:hover { opacity:1; transition:all .2s ease;}
.work-list .info .ctgr { font-size: 14px; }
.work-list .info .tit { font-size: 22px; }
.test { height:240px;}

.scroll-area {
  width: 420px;
  height: 100vh;
}
</style>
