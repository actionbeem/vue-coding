<template>
  <section class="question-form">
    <h2>{{ info.title }}</h2>
    <div class="checkbox-wrap" v-for="opt in info.options" :key="opt.id">
      <input type="checkbox" :id="`opt${opt.id}`" :value="opt.text" v-model="inputResult">
      <label :for="`opt${opt.id}`">{{ opt.text }}</label>
    </div>
    <div>
      <button @click="nextStep">next</button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    info: Object,
  },
  data(){
    return {
      inputResult: [],
    }
  },
  watch: {
    inputResult(val){
      let answer = { id:1, answer:val.join() }
      this.answerResult.items[0] = answer; 
    }
  },
  computed: {
    ...mapState(['answerResult','questionData','stepIndex']),
  },
  methods: {
    nextStep(){
      if(this.stepIndex < this.questionData.length - 1){
        (this.inputResult.length !== 0) ? this.$store.commit('UP_STEP') : alert('answer please')
      } else {
        alert('last')
      }
    },
  },
}
</script>

<style>
.question-form h2 { font-size:16px; margin-bottom:25px; }
.radio-wrap, .checkbox-wrap { margin-bottom:20px; }
.radio-wrap input, .checkbox-wrap input { margin-right:10px; }
</style>
