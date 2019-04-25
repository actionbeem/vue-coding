<template>
  <section class="question-form">
    <div class="inner">
      <h2>{{ info.title }}</h2>
      <div class="checkbox-wrap" v-for="opt in info.options" :key="opt.id">
        <input type="checkbox" :id="`opt${opt.id}`" :value="opt.text" v-model="inputResult">
        <label :for="`opt${opt.id}`">{{ opt.text }}</label>
      </div>
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
      inputResult: [],
    }
  },
  computed: {
    ...mapState(['answerResult']),
  },
  components: {
    BtnControl
  },
  watch: {
    inputResult(val){
      let answer = { id:1, answer:val.join() }
      this.answerResult.items[0] = answer; 
    }
  },
}
</script>

<style>
.question-form h2 { font-size:16px; margin-bottom:25px; }
.question-form .inner { padding:15px; }
.radio-wrap, .checkbox-wrap { margin-bottom:20px; }
.radio-wrap input, .checkbox-wrap input { margin-right:10px; }
</style>
