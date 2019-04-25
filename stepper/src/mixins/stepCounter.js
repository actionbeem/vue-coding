export default {
  data(){
    return {
      formCompleted: false,
    }
  },
  created(){
    if(this.stepIndex === this.questionData.length - 1){
      this.formCompleted = true
    }
  },
  methods: {
    nextStep(){
      (this.inputResult.length !== 0) ? this.$store.commit('UP_STEP') : alert('answer please')
    },
    completeStep(){
      console.log(this.answerResult)
    }
  },
}