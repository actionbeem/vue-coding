<template>
  <!-- <div>
    <div class="container" id="people">
      <div class="filter">
        <label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
        <label><input type="radio" v-model="selectedCategory" value="Tech" /> Tech</label>
        <label><input type="radio" v-model="selectedCategory" value="Entertainment" /> Entertainment</label>
        <label><input type="radio" v-model="selectedCategory" value="Fictional" /> Fictional</label>
      </div>
      
      <ul class="people-list">
        <li v-for="person in filteredPeople">{{ person.name }}</li>
      </ul>
    </div>
  </div> -->
  <div>

  </div>
</template>

<script>
export default {
  mounted(){
    const obj = { 
      aaa : { name:'kjh' },
      bbb : { age:12 }, 
      ccc : { blood: 'O'}
    }
    const result1 = Object.entries(obj);
    const result2 = Object.keys(obj);
    const result3 = Object.values(obj);
    console.log(result1)
    console.log(result2)
    console.log(result3)
  }
}
</script>

<style>

</style>
