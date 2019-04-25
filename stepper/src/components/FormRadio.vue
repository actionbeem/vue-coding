<template>
  <section class="question-form">
    <h2>{{ info.title }}</h2>
    <div class="radio-wrap" v-for="opt in info.options" :key="opt.id">
      <input type="radio" :id="`opt${opt.id}`" :value="opt.text" v-model="inputResult">
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
      inputResult: '',
    }
  },
  watch: {
    inputResult: function(val){
      let answer = { id:2, answer:val }
      this.answerResult.items[1] = answer; 
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

</style>
