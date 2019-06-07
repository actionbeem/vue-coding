<template>
  <div class="header">
    <div class="sign">
      <i class="fas fa-sign-out-alt" v-if="currentUserUid" @click="googleLogout"></i>
      <i class="fas fa-user-circle" v-else @click="googleLogin"></i>
    </div>
    <!-- <button @click="getData">get data</button> -->
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { mapState } from 'vuex'

let db;

export default {
  computed: {
    ...mapState(['currentUserUid','test'])
  },
  methods: {
    googleLogin(){
      let auth = firebase.auth();
      let authProvider = new firebase.auth.GoogleAuthProvider();

      // let aaa = firebase.auth().currentUser;

      auth.signInWithPopup(authProvider).then((result) => {
        let nowUser = result.user;
        firebase.database().ref(`users/${nowUser.uid}`).set({
          uid: nowUser.uid,
          email: nowUser.email,
        });
        /*
        let nowUser = result.user;
        let newUser = 1111;

        if(nowUser){
          
          db = firebase.database();
          db.ref('users/').once('value', snapshot => {
            snapshot.forEach(function(user){
              if(nowUser.uid === user.val().uid){
                // newUser = false;
                console.log('new :', newUser)
              } 
            })
          })

          if(newUser){
            console.log('foot: ', newUser)
            db.ref('users/').push({
              uid: nowUser.uid,
              email: nowUser.email,
            })
          }

          // this.$store.commit('FETCH_USER', user);
        } else {
          this.$store.commit('REMOVE_USER', user);
        } 
        */

      })      

      
      

      auth.onAuthStateChanged(currentUser => {
        // console.log('aaa :', aaa)
        // if(currentUser){
        //   let newUser = true;
        //   db = firebase.database();
        //   db.ref('users/').once('value', snapshot => {
        //     snapshot.forEach(function(user){
        //       if(currentUser.uid === user.val().uid){
        //         newUser = false;
        //         return false;
        //       } 
        //       console.log('snap: ' , newUser)
        //     })
        //   })

        //   if(newUser){
        //     console.log('foot: ', newUser)
        //     db.ref('users/').push({
        //       uid: currentUser.uid,
        //       email: currentUser.email,
        //     })
        //   }

        //   // this.$store.commit('FETCH_USER', user);
        // } else {
        //   this.$store.commit('REMOVE_USER', user);
        // }  
      });    
    },
    googleLogout(){
      firebase.auth().signOut().then(()=> {
        alert('로그아웃 되었습니다.')
      }).catch((error) => {});
    },
    // getData(){
    //   db = firebase.database();
    //   db.ref('users/').on('value', snapshot => {
    //     // console.log('value : ', value)
    //     const users = snapshot.val();
    //     snapshot.forEach(function(aaa){
    //       console.log('key : ', aaa.key)
    //       console.log('val : ', aaa.val())
    //     })
    //   })
    // },
  }
}
</script>

<style scoped>
.header .sign { position:fixed; top:15px; right:15px; z-index:10;}
.header .sign i { cursor:pointer; }
.header .sign .fa-user-circle { font-size:30px; color:#aaa; margin-right:10px; vertical-align: top;}
.header .sign .fa-user-plus { font-size:25px; color:#aaa; vertical-align: top; margin-top:2px; }
.fa-sign-out-alt { font-size:30px; color:#aaa; margin-right:10px; vertical-align: top;}

</style>
