<template>
  <div class="page-works">
    <header class="header-bar">
      <img class="logo" src="../assets/images/logo.png" alt="로고">
      <nav class="nav">
        <ul class="clear">
          <li>About</li>
          <li>Portfolio</li>
          <li>Career</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
    <h1 class="title ta-l">
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
    <ul class="sns-icon clear">
      <li v-for="(icon, index) in snsIcon" :key="index"><img :src="require('../assets/images/icon/icon_' + icon + '.png')" alt="sns 아이콘"></li>
    </ul>
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
      snsIcon: ['fb', 'kakao', 'insta', 'twt'],
      selectedCategory: 'All',
      settings: {
        maxScrollbarLength: 100
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
}
</script>

<style>
.header-bar { position:fixed; top:0; left:0; width:100%; height:60px; z-index:1000; }
.header-bar .logo { width:60px; position:absolute; top:0; left:100px; cursor:pointer; }
.header-bar .nav { position:absolute; top:0; right:200px; }
.header-bar .nav li { font-size:20px; float:left; margin-left:50px; color:#111; cursor:pointer; line-height:60px; opacity:0.3; }
.header-bar:hover { background-color:#000; transition:all .3s ease; }
.header-bar:hover .nav li { opacity:1; color:#fff; transition:all .3s ease; }

.page-works h1.title { font-size:90px; line-height:1.1; color:#333; position:fixed; top:200px; left:100px; font-family: 'Roboto', sans-serif;}
.page-works .filter { position:fixed; top:220px; right:630px; display:inline-block; }
.page-works .filter li { display:inline-block; cursor:pointer; margin-right:15px; color:#aaa; }
.page-works .filter li:hover { color:#666;}
.page-works .filter li.active { color:#333; }
.page-works .work-list-wrap { width:400px; margin:0 200px 0 auto;}
.page-works .work-list { display:inline-block; }
.page-works .work-list > li { display:inline-block; width:400px; height:240px; background-color:#f6f6f6; vertical-align: top; margin-top:4px; cursor:pointer; }
.page-works .work-list > li:first-child { margin-top:0; }
.page-works .work-list .info { height:100%; background-color:rgba(0,0,0,0.2); color:#fff; text-align:left; padding:30px; box-sizing:border-box; opacity:0; transition:opacity .2s ease;}
.page-works .work-list .info:hover { opacity:1; transition:all .2s ease;}
.page-works .work-list .info .ctgr { font-size: 14px; }
.page-works .work-list .info .tit { font-size: 22px; }
.page-works .scroll-area { width: 420px; height: 100vh; }
.sns-icon { position:fixed; left:100px; bottom:70px; }
.sns-icon li { float:left; margin-right:22px; cursor:pointer; opacity:.3; }
.sns-icon li:hover { opacity:1; transition:all .2s ease; }
.sns-icon li img { width:18px; }

/*
 * Container style
 */
.ps {
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}

/*
 * Scrollbar rail styles
 */
.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  width: 5px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps--active-x > .ps__rail-x,
.ps--active-y > .ps__rail-y {
  display: block;
  background-color: transparent;
}

.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y {
  background-color:#fff;
  opacity: 1;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: #fff;
  opacity: 1;
}

/*
 * Scrollbar thumb styles
 */

.ps__thumb-y {
  background-color: #111;
  border-radius: 0;
  transition: background-color .2s linear, width .2s ease-in-out;
  -webkit-transition: background-color .2s linear, width .2s ease-in-out;
  width: 4px;
  /* there must be 'right' for ps__thumb-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #111;
  width: 4px;
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
</style>
