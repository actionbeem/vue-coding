<template>
  <section class="question-form">
    <div class="inner">
      <h2>{{ info.title }}</h2>
      <textarea v-model="inputResult">

      </textarea>
    </div>
    <btn-control :inputValue="inputResult"></btn-control>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import BtnControl from './BtnControl.vue'

export default {
  props: {
    info: Object,
  },
  data(){
    return {
      inputResult: '',
    }
  },
  computed: {
    ...mapState(['answerResult']),
  },
  components: {
    BtnControl
  },
  watch: {
    inputResult: function(val){
      let answer = { id:3, answer:val }
      this.answerResult.items[2] = answer; 
    }
  },
}
</script>

<style>
.question-form textarea { width:100%; height:150px; border:0; border:1px solid #e0e0e0; resizd:none; padding:15px; font-size:14px; box-sizing:border-box;; resize:none; margin-bottom:20px;}
</style>