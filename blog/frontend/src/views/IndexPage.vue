<template>
  <div>
    <div>
      <input type="text" name="title" placeholder="title" v-model="title">
      <input type="text" name="description" placeholder="description" v-model="description">
      <button @click="writePost">글 쓰기</button>
    </div>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  data(){
    return {
      title: "",
      description: "",
    }
  },
  components: {
    PostList
  },
  methods: {
    writePost(){
      this.$http.post('/api/post/create', {
        params: { title: this.title, description: this.description }
      })
        .then(result => {
          console.log(result)
        })
    }
  }
}
</script>

<style>

</style>
