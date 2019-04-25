<template>
  <section class="question-form">
    <h2>{{ info.title }}</h2>
    <select v-model="inputResult">
      <option disabled value="">답변을 선택해주세요.</option>
      <option v-for="opt in info.options" :key="opt.id" :value="opt.text">{{ opt.text }}</option>
    </select>
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
}
</script>

<style>

</style>