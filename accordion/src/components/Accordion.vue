<template>
<!--
  <div class="wrapper">
    <ul class="accordion-menu">
      <li class="tab" v-for="(menu, index) in sideMenu" :key="index" @click="toggle(index)" :class="{ active: menu.active }">
        <p class="tit">{{ menu.title }}</p>
        <transition name="slide-fade">
          <ul class="dep2">
            <li v-for="list in menu.dep2" :key="list">{{ list }}</li>
          </ul>
        </transition>
      </li>
    </ul>

    <div class="MyContent">
      <h1 @click="myActive">Always show this</h1>
    
      <slide-up-down :active="myBoolean" :duration="500">
        Only show this if "active” is true<br>
        Only show this if "active” is true<br>
        Only show this if "active” is true<br>
        Only show this if "active” is true<br>
        Only show this if "active” is true
      </slide-up-down>
    </div>
  </div>
-->

  <div class="wrapper">
    <ul class="accordion-menu">
      <li class="tab" v-for="(menu, index) in sideMenu" :key="index" @click="toggle(index)" :class="{ active: menu.active }">
        <p class="tit">{{ menu.title }}</p>
        <!-- <img class="icon-plus" src="../assets/images/icon_plus.png" alt=""> -->
        <slide-up-down :active="menu.active" :duration="500">
          <ul class="dep2">
            <li v-for="list in menu.dep2" :key="list">{{ list }}</li>
          </ul>
        </slide-up-down>
      </li>
    </ul>
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
      myBoolean: false,
      sideMenu: [
        { 
          title: "tab01",
          active: true,
          dep2: ["aaa","bbb","ccc"]
        },
        { 
          title: "tab02",
          active: false,
          dep2: ["ddd","eee","fff"]
        },
        { 
          title: "tab03",
          active: false,
          dep2: ["zzz","xxx","yyy"]
        },
      ]
    }
  },
  methods: {
    toggle(index){
      this.sideMenu.forEach(val => val.active = false);
      this.sideMenu[index].active = !this.sideMenu[index].active
    },
    myActive(){
      this.myBoolean = !this.myBoolean;
      console.log(this.myBoolean)
      return this.myBoolean;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 { margin: 40px 0 0; }
ul { list-style-type: none; padding: 0; }
li { margin:0; }
a { color: #42b983; }

.wrapper { text-align:left; }
.accordion-menu {  background-color:#fff; }
.accordion-menu .tab {  cursor:pointer; margin-bottom:2px; position:relative;  }
.accordion-menu .tab .tit { line-height:50px; text-align:left; padding:0 15px; background-color:#eee;  }
.accordion-menu .tab .dep2 { background-color:#fff; }
.accordion-menu .tab .dep2 li { padding:0 15px; line-height:3;}
.accordion-menu .tab .icon-plus { width:18px; position:absolute; top:8px; right:15px; }
/*
.slide-fade-enter-active, .slide-fade-leave-active {
  transition:all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  // transform: translateX(10px);
  opacity:0;
}
*/
</style>
