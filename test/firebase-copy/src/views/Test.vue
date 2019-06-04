<template>
  <div>
    
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let auth, database

export default {
  methods: {

  },
  created(){
    auth = firebase.auth()
    database = firebase.database();
    
    let a = auth.currentUser.uid
    console.log(database.ref('/users/' + a).orderByChild('like'))
  }
}
</script>

<style>

</style>
