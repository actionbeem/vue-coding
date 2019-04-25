<template>
  <div class="input-form">
    <ul class="steps" ref="steps">
      <li v-for="(step, index) in questionData" :key="index">
        <div class="num">{{ index }}</div>
        <p class="txt">STEP {{ index }}</p>
      </li>
    </ul>
    <component :is="whichForm" :info="questionData[stepIndex]"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      beforeStep: 0,
    }
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
  components: {
    FormCheckbox: () => import('../components/FormCheckbox.vue'),
    FormRadio: () => import('../components/FormRadio.vue'),
    FormTextarea: () => import('../components/FormTextarea.vue'),
    FormSelect: () => import('../components/FormSelect.vue'),
  },
  watch:{
    stepIndex(val){
      let steps = this.$refs.steps;
      let beforeStep = this.beforeStep;
      steps.childNodes[val].classList.add('active');
      steps.childNodes[beforeStep].classList.remove('active');
      this.beforeStep = val;
    }
  },
  mounted(){
    let steps = this.$refs.steps;
    steps.childNodes[0].classList.add('active');
  },
}
</script>

<style scoped>
.input-form { width:500px; background-color:#fff; margin:100px auto; box-shadow:0 0 20px rgba(0,0,0,0.1);}
.question .tit { font-size:18px; font-weight:normal; }
.steps { display:flex; justify-content:space-between; padding:15px; border-bottom:1px solid #e0e0e0;}
.steps li { display:inline-block;  text-align:center;   }
.steps li .num { display:inline-block; font-size:26px; width:60px; height:60px; border-radius:50%; background-color:#eee; color:#999; line-height:63px; cursor:pointer; }
.steps li .txt { font-size:14px; color:#bbb;} 
.steps li.active .num { background-color:#333; color:#fff; }
.steps li.active .txt { color:#333;}

</style>
