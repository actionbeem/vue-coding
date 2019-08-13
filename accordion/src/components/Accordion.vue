<template>
  <div class="wrapper">
    <ul class="accordion-menu">
      <li class="tab" v-for="(menu, index) in sideMenu" :key="index" @click="toggle(index)" :class="{ active: menu.active }">
        <p class="tit">{{ menu.title }}</p>
        <ul class="dep2">
          <li v-for="list in menu.dep2" :key="list">{{ list }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data(){
    return {
      sideMenu: [
        { 
          title: "tab01",
          active: false,
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
.accordion-menu { display:inline-block; background-color:#fff; padding:10px; background-color:#ccc; }
.accordion-menu .tab { width:200px; cursor:pointer; }
.accordion-menu .tab .tit { line-height:50px; text-align:left; padding:0 15px; background-color:#eee;  }
.accordion-menu .tab .dep2 { display:none;  }
.accordion-menu .tab .dep2 li { padding:0 15px; }
.accordion-menu .tab.active .dep2 { display:block; }

</style>
