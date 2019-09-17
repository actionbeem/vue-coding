<template>
  <div style="text-align:center;">
    <h1>test work {{ id }}</h1>
    <p style="margin-top:20px">{{ selectedWork }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  asyncData({ params }) { 
    return { id: params.id }; 
  },
  validate({params}) { 
    return /^\d+$/.test(params.id);
  },
  computed: {
    ...mapState(['workList']),
    selectedWork(){
      return this.workList.filter(val => {
        return val.id === Number(this.workID)
      })
    },
  },
  data(){
    return {
      workID: this.$route.params.id
    }
  },
}
</script>

<style scoped>

</style>