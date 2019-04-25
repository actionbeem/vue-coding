<template>
  <section class="question-form">
    <h2>{{ info.title }}</h2>
    <div class="radio-wrap" v-for="opt in info.options" :key="opt.id">
      <input type="radio" :id="`opt${opt.id}`" :value="opt.text" v-model="inputResult">
      <label :for="`opt${opt.id}`">{{ opt.text }}</label>
    </div>
    <div class="btn-step">
      <button class="btn-submit" v-if="formCompleted" @click="completeStep">Submit</button>
      <button class="btn-next" v-else @click="nextStep">Next</button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import stepCounter from '../mixins/stepCounter.js'

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
    ...mapState(['answerResult','questionData','stepIndex']),
  },
  mixins: [stepCounter],
  watch: {
    inputResult: function(val){
      let answer = { id:2, answer:val }
      this.answerResult.items[1] = answer; 
    }
  },
}
</script>

<style>

</style>
