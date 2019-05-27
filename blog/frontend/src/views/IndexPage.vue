<template>
  <div>
    <post-list></post-list>
    <router-link to="/write">write</router-link>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  components: {
    PostList,
  },
}
</script>

<style>

</style>
