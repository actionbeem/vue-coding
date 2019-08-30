<template>
  <div class="wrapper">
    <section style="background-color:#fff"></section>
    <section style="background-color:#eee"></section>
    <section style="background-color:#ddd"></section>
    <section style="background-color:#ccc"></section>
    <section style="background-color:#bbb"></section>
    <section style="background-color:#aaa"></section>
    <section style="background-color:#999"></section>
    <section style="background-color:#888"></section>
    <section style="background-color:#777"></section>
    <section style="background-color:#666"></section>
    <section style="background-color:#555"></section>
    <section style="background-color:#444"></section>
    <section style="background-color:#333"></section>
    <section style="background-color:#222"></section>
    <section style="background-color:#111"></section>
    <section style="background-color:#000"></section>

    <button class="btn-top" @click="moveTop"></button>
  </div>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
import Vue from 'vue'

Vue.component('slide-up-down', SlideUpDown)

export default {
  name: 'Accordion',
  data(){
    return {
      pastIndex: null,
      sideMenu: [
        { 
          title: "menu01",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu02",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu03",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu04",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu05",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
      ]
    }
  },
  methods: {
    moveTop(){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
}

</script>

<style scoped>
section { height:200px; }
.btn-top { position:fixed; right:40px; bottom:40px; z-index:10; width:60px; height:60px; background-color:#fff; cursor:pointer; }
.btn-top:before { content:""; display:inline-block; width:20px; height:2px; transform:rotate(-45deg); position:absolute; top:28px; left:13px; background-color:#555; } 
.btn-top:after { content:""; display:inline-block; width:20px; height:2px; transform:rotate(45deg); position:absolute; top:28px; left:26px; background-color:#555; } 
</style>
