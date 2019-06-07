<template>
  <div>
    <!-- <post-list></post-list> -->
    <router-link class="btn-write" to="/write">write</router-link>
  </div>
</template>

<script>
// import PostList from '../components/PostList.vue'
import { mapState } from 'vuex'

export default {
  components: {
    // PostList,
  },
  computed: {
    ...mapState(['currentUserUid'])
  },
  created(){
    console.log('current : ', this.currentUserUid)
    if(this.currentUserUid){
      console.log('111')
    } else {
      console.log('222')
    }
  }
}
</script>



<style scoped>
.btn-write { position:fixed; right:30px; bottom:30px; width:50px; height:50px; text-align:center; line-height:50px; border-radius:25px; background-color:#333; color:#fff; z-index:10; }
</style>