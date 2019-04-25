<template>
  <div class="input-form">
    <component :is="whichForm" :info="questionData[stepIndex]"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    FormCheckbox: () => import('../components/FormCheckbox.vue'),
    FormRadio: () => import('../components/FormRadio.vue'),
    FormTextarea: () => import('../components/FormTextarea.vue'),
    FormSelect: () => import('../components/FormSelect.vue'),
  },
  computed: {
    ...mapState(['questionData','stepIndex']),

    whichForm(){
      switch(this.stepIndex){
        case 0 :
          return 'FormCheckbox'
        case 1 :
          return 'FormRadio'
        case 2 :
          return 'FormTextarea'
        case 3 :
          return 'FormSelect'
      }
    }
  },

}
</script>

<style scoped>
.input-form { width:500px; padding:15px; background-color:#fff; margin:100px auto; box-shadow:0 0 20px rgba(0,0,0,0.1);}
.question .tit { font-size:18px; font-weight:normal; }
</style>
