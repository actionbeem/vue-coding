<template>
  <section class="question-form">
    <h2>{{ info.title }}</h2>
    <select v-model="inputResult">
      <option disabled value="">답변을 선택해주세요.</option>
      <option v-for="opt in info.options" :key="opt.id" :value="opt.text">{{ opt.text }}</option>
    </select>
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
      let answer = { id:4, answer:val }
      this.answerResult.items[3] = answer; 
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