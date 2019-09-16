<template>
  <section>
    <div class="work">
      <div class="inner-wrap">
        <h1 class="pg-tit">Work</h1>
        <ul class="filter">
          <li v-for="ctgr in categories" :key="ctgr" :class="{ active : ctgr === selectedCategory}">
            <button @click="fatchCategory(ctgr)">{{ ctgr }}</button>
          </li>
        </ul> 
      </div>
      <ul class="list clear">
        <transition-group name="fade" mode="out-in">
          <li v-for="work in filterList" :key="work.id" :class="work.category">
            <nuxt-link to="">
              <div class="thumb">
                <img :src="require('../assets/images/' + work.src + '.jpg')" alt="">
              </div>
              <div>
                <p class="tit">{{ work.title }}</p>
                <p class="sub">{{ work.subTitle }}</p>
              </div>
            </nuxt-link>
            <!-- <p>{{ work.title }}</p> -->
          </li>
        </transition-group>
      </ul>
    </div>
  </section>

</template>

<script>
export default {
  data(){
    return {
      categories: ['Design','Publish'],
      selectedCategory: 'Design',
      workList: [
        { id:1, title:'29cm', subTitle:'UI/UX Concept Design', src:'thumb_29cm', category:'Design', description:'this item is.. 01' },
        { id:2, title:'Conhom', subTitle:'UI/UX Concept Design', src:'thumb_conhom', category:'Design', description:'this item is.. 02' },
        { id:3, title:'Megabox', subTitle:'UI/UX Concept Design', src:'thumb_megabox', category:'Design', description:'this item is.. 03' },
        { id:4, title:'SyncCommerce', subTitle:'Dashboard Design', src:'thumb_sync', category:'Design', description:'this item is.. 04' },
        { id:5, title:'Hyungji', subTitle:'Dashboard Design', src:'thumb_hyungji', category:'Publish', description:'this item is.. 01' },
        { id:6, title:'Guess', subTitle:'Dashboard Design', src:'thumb_guess', category:'Publish', description:'this item is.. 02' },
        { id:7, title:'Innoio', subTitle:'Dashboard Design', src:'thumb_innoio', category:'Publish', description:'this item is.. 03' },
        { id:8, title:'Volfgang Laib', subTitle:'Dashboard Design', src:'thumb_volfgang', category:'Publish', description:'this item is.. 04' },

        { id:9, title:'Volfgang Laib', subTitle:'Web Design', src:'thumb_volfgang', category:'Design', description:'this item is.. 03' },
        { id:10, title:'SyncCommerce', subTitle:'Dashboard Design', src:'thumb_sync', category:'Design', description:'this item is.. 04' },
        { id:11, title:'29cm', subTitle:'UI/UX Concept Design', src:'thumb_29cm', category:'Design', description:'this item is.. 01' },
        { id:12, title:'Conhom', subTitle:'UI/UX Concept Design', src:'thumb_conhom', category:'Design', description:'this item is.. 02' },
        { id:9, title:'Volfgang Laib', subTitle:'Web Design', src:'thumb_volfgang', category:'Design', description:'this item is.. 03' },
        { id:10, title:'SyncCommerce', subTitle:'Dashboard Design', src:'thumb_sync', category:'Design', description:'this item is.. 04' },

      ]
    }
  },
  computed: {
    filterList(){
      return this.workList.filter(val => {
        return val.category === this.selectedCategory;
      })
    },
  },
  methods:{
    fatchCategory(ctgr){
      this.selectedCategory = ctgr
    },
  },
}
</script>

<style scoped>
.work { width:1300px; margin:0 auto; padding-top:90px;}
.work .list li { width:25%; float:left; padding:0 15px; box-sizing:border-box; margin-bottom:30px;}
.work .list .thumb { margin-bottom:10px; border-radius:6px; overflow:hidden; }
.work .list .thumb:hover { box-shadow:0 10px 10px rgba(0,0,0,0.1); transition:all .2s ease; }
.work .list .thumb img { width:100%; transform:scale(1); transition:all .3s ease;}
.work .list .thumb:hover img { transform:scale(1.1); transition:all .3s ease; }
.work .list .tit { font-size:18px; color:#666; margin-bottom:3px; }
.work .list .sub { font-size:13px; color:#aaa; }
.filter { margin-bottom:25px; }
.filter li { display:inline-block; margin-right:7px; }
.filter li button { font-size:15px; color:#333; padding:6px 18px; border-radius:25px;}
.filter li button:hover { background-color:#eee; transition:all .3s ease; }
.filter li.active button { background-color:#222 !important; color:#fff; }

.fade-enter-active { transition: all .5s ease;  }
.fade-enter { opacity:0; margin-top:20px; }

@media (max-width:1700px) {
  /* .work-list { width:1300px; } */
}
</style>
