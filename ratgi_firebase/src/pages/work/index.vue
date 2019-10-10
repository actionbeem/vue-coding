<template>
  <section>
    <div class="work">
      <div class="inner-wrap">
        <h1 class="pg-tit mb-30">Work</h1>
        <ul class="filter">
          <li v-for="ctgr in categories" :key="ctgr" :class="{ active : ctgr === selectedCategory}">
            <button @click="fatchCategory(ctgr)">{{ ctgr }}</button>
          </li>
        </ul> 
      </div>
      <work-list :worklist="filterList"></work-list>
      <nuxt-child/>
    </div>
  </section>

</template>

<script>
import { mapState } from 'vuex'
import workList from '../../components/workList.vue'

export default {
  data(){
    return {
      categories: ['Design','Publish','Idea'],
      selectedCategory: 'Design',
    }
  },
  components: {
    workList
  },
  computed: {
    ...mapState(['workList']),

    filterList(){
      return this.workList.filter(work => {
        return work.category === this.selectedCategory;
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
.work { width:1300px; margin:0 auto; padding-top:140px;}
.filter { margin-bottom:25px; }
.filter li { display:inline-block; margin-right:7px; }
.filter li button { font-size:15px; color:#333; padding:6px 18px; border-radius:25px;}
.filter li button:hover { background-color:#eee; transition:all .3s ease; }
.filter li.active button { background-color:#222 !important; color:#fff; }

.fade-enter-active { transition: all .5s ease;  }
.fade-enter { opacity:0; margin-top:20px; }

@media (max-width:1700px) {
  .work { padding-top:90px;}
}
</style>
