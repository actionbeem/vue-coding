<template>
  <section class="question-form">
    <h2>{{ info.title }}</h2>
    <textarea v-model="inputResult">

    </textarea>
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
      let answer = { id:3, answer:val }
      this.answerResult.items[2] = answer; 
    }
  },
}
</script>

<style>
.question-form textarea { width:100%; height:150px; border:0; border:1px solid #e0e0e0; resizd:none; }
</style>