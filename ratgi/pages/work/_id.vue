<template>
  <div>
    <h1 style="text-align:center;">test work {{ id }}</h1>
    <!-- <p>
      work ID : {{ id }}
    </p> -->
  </div>
</template>

<script>
export default {
  asyncData({params}) { 
    return { id: params.id }; },
  validate({params}) { 
    return /^\d+$/.test(params.id);
  },
}
</script>

<style scoped>

</style>