<template>
  <div class="write-form">
    <input type="text" class="title" name="title" placeholder="title" v-model="title">
    <!-- <button @click="writePost">글 쓰기</button> -->

    <textarea id="post-editor">Hi</textarea>
    <button class="btn-submit" @click="writePost">submit</button>
  </div>
</template>

<script>
import 'suneditor/dist/css/suneditor.min.css'
import suneditor from 'suneditor'
import {align, font, fontSize, fontColor, hiliteColor,
        horizontalRule, list, table, formatBlock, link, image, video} from 'suneditor/src/plugins'
import lang from 'suneditor/src/lang'
import {en, ko} from 'suneditor/src/lang'
import de from 'suneditor/src/lang/de'


export default {
  data(){
    return {
      title: "",
      editor: null,
    }
  },
  methods: {
    // writePost(){
    //   this.$http.post('/api/post/write', {
    //     params: { title: this.title }
    //   })
    //     .then(result => {
    //       this.$store.dispatch('fetchList')
    //     })
    // },
    writePost(){
      const title = this.title;
      const description = this.editor.getContents();
      console.log(description)
      this.$http.post('/api/post/write', {
        params: { title: title, description: description } 
      })
      .then(result => {
        this.$router.push('/')
      })
    }
  },
  mounted (){
    this.editor = suneditor.create('post-editor', {
      plugins: [
        font,
        link,
        image,
        video
      ],
      buttonList: [
        ['bold', 'underline', 'italic'],
        ['link', 'image', 'video']
      ],
      lang: lang['ko']
    });
  }
}
</script>

<style scoped>
.write-form { padding:0 100px; box-sizing:border-box;}
.write-form .title { width:100%; padding:12px; font-size:15px; background-color:#eee; border:0; border-radius:4px; margin-bottom:30px; }
#post-editor { width:100%; height:300px;}
.write-form .btn-submit { margin-top:50px; background-color:#333; color:#fff; }
</style>
