<template>
  <div class="page-detail clear">
    <!-- <header-bar></header-bar> -->
    <div class="info">
      <p class="category">{{ currentWork.category }}</p>
      <h1 class="title mb-50">{{ currentWork.title }}</h1>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit reiciendis libero voluptas cum eos vitae tenetur dolor debitis exercitationem optio inventore earum deleniti distinctio facere, animi deserunt sed harum.
        Nulla accusantium laboriosam odit aliquid, voluptatem cupiditate eius. Commodi provident, consequatur consectetur aperiam inventore fuga a eum molestias deserunt corporis mollitia quo doloribus non? Est ipsa quaerat id excepturi quam?
        Voluptates laboriosam neque libero inventore tempore asperiores ex unde a est iure odit enim repudiandae doloremque animi nisi accusantium rem fugiat, id ut itaque. Nesciunt inventore placeat quidem repudiandae sint!
        Saepe, quae animi, ullam facere suscipit iste sunt voluptatem architecto quia cumque repellat dolore cum inventore. Modi, nemo! Illum quos aperiam facilis esse! Laboriosam distinctio quis est quisquam animi fuga.
        Et accusamus ipsam quam aliquam, dicta sed ad necessitatibus excepturi, architecto fugiat soluta nihil temporibus fugit cupiditate reprehenderit doloremque deleniti fuga. Accusantium voluptatum corporis beatae tempore nostrum, ullam optio nisi?
      </p>
    </div>
    <div class="img-area fl-r">
      <div style="height:2000px; background-color:#f6f6f6; border-bottom:30px solid #ccc;">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderBar from '../components/HeaderBar.vue'

export default {
  data(){
    return {

    }
  },
  components: {
    HeaderBar,
  },
  computed:{
    ...mapState(['db']),
    currentWork(){
      const workId = parseInt(this.$route.params.workId);
      const current = this.db.works.filter( work => {
        return workId === work.id
      })
      return current[0]
    }
  },
  mounted(){
    
  }
}
</script>

<style>
.page-detail .info { position:fixed; top:300px; left:100px; text-align:left; z-index:10; width:600px; }
.page-detail .category { font-size:18px; color:#aaa; }
.page-detail .title { font-size:40px; font-family: 'Roboto', sans-serif;color:#333;  }
.page-detail .description { font-size:15px; color:#777; } 
.page-detail .img-area { width:65%; }

</style>
