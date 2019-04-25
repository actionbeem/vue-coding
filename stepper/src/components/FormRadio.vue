<template>
  <section class="question-form">
    <div class="inner">
      <h2>{{ info.title }}</h2>
      <div class="radio-wrap" v-for="opt in info.options" :key="opt.id">
        <input type="radio" :id="`opt${opt.id}`" :value="opt.text" v-model="inputResult">
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
      let answer = { id:2, answer:val }
      this.answerResult.items[1] = answer; 
    }
  },
}
</script>

<style>

</style>
